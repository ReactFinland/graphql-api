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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __importDefault(require("lodash/map"));
const type_graphql_1 = require("type-graphql");
const conferences_1 = __importDefault(require("../conferences"));
const Contact_1 = require("./Contact");
const Location_1 = require("./Location");
const Schedule_1 = require("./Schedule");
const Session_1 = require("./Session");
let Conference = class Conference {
};
__decorate([
    type_graphql_1.Field((_) => type_graphql_1.ID),
    __metadata("design:type", String)
], Conference.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "series", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((_) => Contact_1.Contact),
    __metadata("design:type", Contact_1.Contact)
], Conference.prototype, "organizer", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "year", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "startDate", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "endDate", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "slogan", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Conference.prototype, "websiteUrl", void 0);
__decorate([
    type_graphql_1.Field((_) => [Location_1.Location], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "locations", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact]),
    __metadata("design:type", Array)
], Conference.prototype, "organizers", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "mcs", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "partners", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact]),
    __metadata("design:type", Array)
], Conference.prototype, "sponsors", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "goldSponsors", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "silverSponsors", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "bronzeSponsors", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "platformSponsors", void 0);
__decorate([
    type_graphql_1.Field((_) => [Schedule_1.Schedule]),
    __metadata("design:type", Array)
], Conference.prototype, "schedules", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "allSpeakers", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "speakers", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "keynoteSpeakers", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "fullTalkSpeakers", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "lightningTalkSpeakers", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "workshopInstructors", void 0);
__decorate([
    type_graphql_1.Field((_) => [Session_1.Session], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "talks", void 0);
__decorate([
    type_graphql_1.Field((_) => [Session_1.Session], { nullable: true }),
    __metadata("design:type", Array)
], Conference.prototype, "workshops", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact]),
    __metadata("design:type", Array)
], Conference.prototype, "attendees", void 0);
Conference = __decorate([
    type_graphql_1.ObjectType()
], Conference);
exports.Conference = Conference;
// TODO: Maybe this should become a static method of Conference
function getConference(id) {
    if (conferences_1.default[id]) {
        const conference = conferences_1.default[id];
        return Object.assign(Object.assign({}, conference), { sponsors: attachSponsorTypes(conference, conference.sponsors) });
    }
    else {
        throw new Error("Unknown conference");
    }
}
exports.getConference = getConference;
// TODO: Extract sponsor levels to this code won't be needed anymore
function attachSponsorTypes(conference, sponsors) {
    const { goldSponsors, silverSponsors, bronzeSponsors, platformSponsors, partners, } = conference;
    return map_1.default(sponsors, (_a) => {
        var { name, type } = _a, rest = __rest(_a, ["name", "type"]);
        return (Object.assign(Object.assign({}, rest), { name, type: type
                .concat(isSponsor(goldSponsors, name, Contact_1.ContactType.GOLD_SPONSOR), isSponsor(silverSponsors, name, Contact_1.ContactType.SILVER_SPONSOR), isSponsor(bronzeSponsors, name, Contact_1.ContactType.BRONZE_SPONSOR), isSponsor(platformSponsors, name, Contact_1.ContactType.PLATFORM_SPONSOR), isSponsor(partners, name, Contact_1.ContactType.PARTNER))
                .filter(Boolean) }));
    });
}
function isSponsor(sponsors, sponsorName, contactType) {
    return sponsors.find(({ name }) => sponsorName === name) ? contactType : null;
}
//# sourceMappingURL=Conference.js.map