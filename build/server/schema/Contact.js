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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flatMap_1 = __importDefault(require("lodash/flatMap"));
const uniqBy_1 = __importDefault(require("lodash/uniqBy"));
const type_graphql_1 = require("type-graphql");
const Image_1 = require("./Image");
const Location_1 = require("./Location");
const Schedule_1 = require("./Schedule");
const Session_1 = require("./Session");
const Social_1 = require("./Social");
var ContactType;
(function (ContactType) {
    ContactType["PRESS"] = "PRESS";
    ContactType["SPEAKER"] = "SPEAKER";
    ContactType["TALK"] = "TALK";
    ContactType["LIGHTNING_TALK"] = "LIGHTNING_TALK";
    ContactType["KEYNOTE"] = "KEYNOTE";
    ContactType["WORKSHOP"] = "WORKSHOP";
    ContactType["WORKSHOP_HOST"] = "WORKSHOP_HOST";
    ContactType["ORGANIZER"] = "ORGANIZER";
    ContactType["SPONSOR"] = "SPONSOR";
    ContactType["GOLD_SPONSOR"] = "GOLD_SPONSOR";
    ContactType["SILVER_SPONSOR"] = "SILVER_SPONSOR";
    ContactType["BRONZE_SPONSOR"] = "BRONZE_SPONSOR";
    ContactType["PLATFORM_SPONSOR"] = "PLATFORM_SPONSOR";
    ContactType["PARTNER"] = "PARTNER";
    ContactType["ATTENDEE"] = "ATTENDEE";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
let Contact = class Contact {
};
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Contact.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Contact.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Contact.prototype, "about", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Contact.prototype, "aboutShort", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Contact.prototype, "company", void 0);
__decorate([
    type_graphql_1.Field((_) => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], Contact.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field((_) => [ContactType]),
    __metadata("design:type", Array)
], Contact.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field((_) => Social_1.Social),
    __metadata("design:type", Social_1.Social)
], Contact.prototype, "social", void 0);
__decorate([
    type_graphql_1.Field((_) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Contact.prototype, "keywords", void 0);
__decorate([
    type_graphql_1.Field((_) => Location_1.Location),
    __metadata("design:type", Location_1.Location)
], Contact.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field((_) => [Session_1.Session], { nullable: true }),
    __metadata("design:type", Array)
], Contact.prototype, "talks", void 0);
__decorate([
    type_graphql_1.Field((_) => [Session_1.Session], { nullable: true }),
    __metadata("design:type", Array)
], Contact.prototype, "workshops", void 0);
__decorate([
    type_graphql_1.Field((_) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Contact.prototype, "noPhotography", void 0);
Contact = __decorate([
    type_graphql_1.ObjectType()
], Contact);
exports.Contact = Contact;
// TODO: Maybe this should become a static method of Conference
function getSessionSpeakers(conference, sessions) {
    const talks = Schedule_1.resolveSessions(conference.schedules, [
        Session_1.SessionType.LIGHTNING_TALK,
        Session_1.SessionType.TALK,
        Session_1.SessionType.KEYNOTE,
    ]);
    const workshops = Schedule_1.resolveSessions(conference.schedules, [
        Session_1.SessionType.WORKSHOP,
    ]);
    const speakers = uniqBy_1.default(flatMap_1.default(sessions, (session) => (session.people || []).concat(session.sessions
        ? flatMap_1.default(session.sessions, (session) => session.people || [])
        : [])), "name");
    return speakers.map((speaker) => (Object.assign(Object.assign({}, speaker), { talks: talks
            ? talks.filter(({ people }) => people && people.find((person) => person.name === speaker.name))
            : [], workshops: workshops
            ? workshops.filter(({ people }) => people && people.find((person) => person.name === speaker.name))
            : [] })));
}
exports.getSessionSpeakers = getSessionSpeakers;
//# sourceMappingURL=Contact.js.map