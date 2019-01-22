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
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
"use strict";
const graphql_scalars_1 = require("@okgrow/graphql-scalars");
const lodash_1 = require("lodash");
const type_graphql_1 = require("type-graphql");
const conferences_1 = __importDefault(require("../conferences"));
const conferenceSeries_1 = __importDefault(require("./conferenceSeries"));
const Contact_1 = require("./Contact");
const Location_1 = require("./Location");
const scalars_1 = require("./scalars");
const Schedule_1 = require("./Schedule");
const Series_1 = require("./Series");
const Session_1 = require("./Session");
let Conference = class Conference {
};
__decorate([
    type_graphql_1.Field(_ => type_graphql_1.ID),
    __metadata("design:type", String)
], Conference.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Conference.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Conference.prototype, "year", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar),
    __metadata("design:type", typeof (_a = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _a : Object)
], Conference.prototype, "websiteUrl", void 0);
__decorate([
    type_graphql_1.Field(_ => [Location_1.Location], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "locations", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact]),
    __metadata("design:type", Array)
], Conference.prototype, "organizers", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "mcs", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "partners", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact]),
    __metadata("design:type", Array)
], Conference.prototype, "sponsors", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "goldSponsors", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "silverSponsors", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "bronzeSponsors", void 0);
__decorate([
    type_graphql_1.Field(_ => [Schedule_1.Schedule]),
    __metadata("design:type", Array)
], Conference.prototype, "schedules", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "speakers", void 0);
__decorate([
    type_graphql_1.Field(_ => [Session_1.Session]),
    __metadata("design:type", Array)
], Conference.prototype, "talks", void 0);
__decorate([
    type_graphql_1.Field(_ => [Session_1.Session]),
    __metadata("design:type", Array)
], Conference.prototype, "workshops", void 0);
Conference = __decorate([
    type_graphql_1.ObjectType()
], Conference);
exports.Conference = Conference;
let ConferenceResolver = class ConferenceResolver {
    conference(id) {
        return getConference(id);
    }
    allConferences() {
        return Object.keys(conferences_1.default).map(id => conferences_1.default[id]);
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
    speakers(conference) {
        const talkSpeakers = getSpeakers(conference.talks);
        const workshopSpeakers = getSpeakers(conference.workshops);
        return lodash_1.uniq(talkSpeakers.concat(workshopSpeakers));
    }
};
__decorate([
    type_graphql_1.Query(_ => Conference),
    __param(0, type_graphql_1.Arg("id", _ => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "conference", null);
__decorate([
    type_graphql_1.Query(_ => [Conference]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "allConferences", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Series_1.Series),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "series", null);
__decorate([
    type_graphql_1.FieldResolver(_ => [Contact_1.Contact]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conference]),
    __metadata("design:returntype", void 0)
], ConferenceResolver.prototype, "speakers", null);
ConferenceResolver = __decorate([
    type_graphql_1.Resolver(_ => Conference)
], ConferenceResolver);
exports.ConferenceResolver = ConferenceResolver;
function getConference(id) {
    if (conferences_1.default[id]) {
        return conferences_1.default[id];
    }
    else {
        throw new Error("Unknown conference");
    }
}
exports.getConference = getConference;
function getSpeakers(sessions) {
    return lodash_1.uniq(lodash_1.flatMap(sessions, session => session.people || []));
}
exports.getSpeakers = getSpeakers;
//# sourceMappingURL=Conference.js.map