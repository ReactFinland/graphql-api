"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const just_kebab_case_1 = __importDefault(require("just-kebab-case"));
const path = __importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const conferences_1 = __importDefault(require("../../conferences"));
const Conference_1 = require("../Conference");
const Contact_1 = require("../Contact");
const Schedule_1 = require("../Schedule");
const Series_1 = require("../Series");
const Session_1 = require("../Session");
const conferenceSeries_1 = __importDefault(require("./conferenceSeries"));
const load_attendees_1 = __importDefault(require("./load-attendees"));
let ConferenceResolver = class ConferenceResolver {
    conference(id) {
        return Conference_1.getConference(id);
    }
    conferences() {
        return Object.values(conferences_1.default);
    }
    allConferences() {
        return Object.values(conferences_1.default);
    }
    series(conference) {
        const id = conference.id;
        for (const seriesId of Object.keys(conferenceSeries_1.default)) {
            const oneSeries = conferenceSeries_1.default[seriesId];
            if (oneSeries.conferences.indexOf(id) !== -1) {
                return oneSeries;
            }
        }
        return;
    }
    allSpeakers(conference) {
        const talks = Schedule_1.resolveSessions(conference.schedules, [
            Session_1.SessionType.TALK,
            Session_1.SessionType.KEYNOTE,
            Session_1.SessionType.LIGHTNING_TALK,
            Session_1.SessionType.PANEL,
            Session_1.SessionType.WORKSHOP,
        ]);
        return Contact_1.getSessionSpeakers(conference, talks);
    }
    speakers(conference) {
        const talks = Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.TALK]);
        return Contact_1.getSessionSpeakers(conference, talks);
    }
    async attendees(conference, ctx) {
        const speakers = Contact_1.getSessionSpeakers(conference, Schedule_1.resolveSessions(conference.schedules, [
            Session_1.SessionType.KEYNOTE,
            Session_1.SessionType.LIGHTNING_TALK,
            Session_1.SessionType.TALK,
            Session_1.SessionType.WORKSHOP,
        ]));
        return conference.organizers.concat(speakers, await load_attendees_1.default(conference, `${path.join(ctx.projectRoot, "attendees", just_kebab_case_1.default(conference.name))}.csv`));
    }
    talks(conference) {
        return Schedule_1.resolveSessions(conference.schedules, [
            Session_1.SessionType.LIGHTNING_TALK,
            Session_1.SessionType.TALK,
            Session_1.SessionType.KEYNOTE,
        ]);
    }
    keynotes(conference) {
        return Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.KEYNOTE]);
    }
    keynoteSpeakers(conference) {
        const talks = Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.KEYNOTE]);
        return Contact_1.getSessionSpeakers(conference, talks);
    }
    fullTalks(conference) {
        return Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.TALK]);
    }
    fullTalkSpeakers(conference) {
        const talks = Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.TALK]);
        return Contact_1.getSessionSpeakers(conference, talks);
    }
    lightningTalks(conference) {
        return Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.LIGHTNING_TALK]);
    }
    lightningTalkSpeakers(conference) {
        const talks = Schedule_1.resolveSessions(conference.schedules, [
            Session_1.SessionType.LIGHTNING_TALK,
        ]);
        return Contact_1.getSessionSpeakers(conference, talks);
    }
    workshops(conference) {
        return Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.WORKSHOP]);
    }
    workshopInstructors(conference) {
        const talks = Schedule_1.resolveSessions(conference.schedules, [Session_1.SessionType.WORKSHOP]);
        return Contact_1.getSessionSpeakers(conference, talks);
    }
};
__decorate([
    type_graphql_1.Query((_) => Conference_1.Conference),
    __param(0, type_graphql_1.Arg("id", (_) => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "conference", null);
__decorate([
    type_graphql_1.Query((_) => [Conference_1.Conference]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "conferences", null);
__decorate([
    type_graphql_1.Query((_) => [Conference_1.Conference], {
        deprecationReason: "Use `conferences` instead",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "allConferences", null);
__decorate([
    type_graphql_1.FieldResolver((_) => Series_1.Series),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "series", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Contact_1.Contact]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "allSpeakers", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Contact_1.Contact]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "speakers", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Contact_1.Contact]),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference, Object]),
    __metadata("design:returntype", Promise)
], ConferenceResolver.prototype, "attendees", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session], {
        deprecationReason: "Use `keynotes`,s `fullTalks` and `lightningTalks` instead",
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "talks", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "keynotes", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "keynoteSpeakers", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "fullTalks", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "fullTalkSpeakers", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "lightningTalks", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "lightningTalkSpeakers", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "workshops", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference_1.Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "workshopInstructors", null);
ConferenceResolver = __decorate([
    type_graphql_1.Resolver((_) => Conference_1.Conference)
], ConferenceResolver);
exports.default = ConferenceResolver;
//# sourceMappingURL=ConferenceResolver.js.map