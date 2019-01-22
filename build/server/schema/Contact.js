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
const lodash_1 = require("lodash");
const type_graphql_1 = require("type-graphql");
const conferences_1 = __importDefault(require("../conferences"));
const Conference_1 = require("./Conference");
const Country_1 = require("./Country");
const Image_1 = require("./Image");
const Location_1 = require("./Location");
const Session_1 = require("./Session");
const Social_1 = require("./Social");
var ContactType;
(function (ContactType) {
    ContactType[ContactType["SPEAKER"] = 0] = "SPEAKER";
    ContactType[ContactType["TALK"] = 1] = "TALK";
    ContactType[ContactType["LIGHTNING_TALK"] = 2] = "LIGHTNING_TALK";
    ContactType[ContactType["KEYNOTE"] = 3] = "KEYNOTE";
    ContactType[ContactType["WORKSHOP"] = 4] = "WORKSHOP";
    ContactType[ContactType["WORKSHOP_HOST"] = 5] = "WORKSHOP_HOST";
    ContactType[ContactType["ORGANIZER"] = 6] = "ORGANIZER";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
type_graphql_1.registerEnumType(ContactType, {
    name: "ContactType",
    description: "Type of the contact",
});
let Contact = class Contact {
};
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Contact.prototype, "about", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Contact.prototype, "aboutShort", void 0);
__decorate([
    type_graphql_1.Field(_ => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], Contact.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field(_ => [ContactType]),
    __metadata("design:type", Array)
], Contact.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(_ => Social_1.Social),
    __metadata("design:type", Social_1.Social)
], Contact.prototype, "social", void 0);
__decorate([
    type_graphql_1.Field(_ => [String]),
    __metadata("design:type", Array)
], Contact.prototype, "keywords", void 0);
__decorate([
    type_graphql_1.Field(_ => Location_1.Location),
    __metadata("design:type", Location_1.Location)
], Contact.prototype, "location", void 0);
Contact = __decorate([
    type_graphql_1.ObjectType()
], Contact);
exports.Contact = Contact;
let ContactResolver = class ContactResolver {
    contact(contactName, conferenceId) {
        const conference = Conference_1.getConference(conferenceId);
        const sponsor = conference.sponsors.find(({ name }) => name === contactName);
        const organizer = Object.values(conference.organizers).find(({ name }) => name === contactName);
        const speaker = Conference_1.getSpeakers(conference.talks).find(({ name }) => name === contactName) ||
            Conference_1.getSpeakers(conference.workshops).find(({ name }) => name === contactName);
        const mc = conference.mcs && conference.mcs.find(({ name }) => name === contactName);
        const contact = sponsor || organizer || speaker || mc;
        if (!contact) {
            throw new Error(`Contact ${contactName} wasn't found!`);
        }
        // FIXME: This contains all talks/workshops - likely we should filter based on conferenceId?
        return contact;
    }
    image(contact, ctx) {
        return {
            url: `${ctx.mediaUrl}/${contact.image.url}`,
        };
    }
    aboutShort(contact) {
        if (contact.aboutShort) {
            return contact.aboutShort;
        }
        else {
            return contact.about ? contact.about.split(".")[0] + "." : "";
        }
    }
    social(contact) {
        const social = contact.social;
        const rules = {
            homepage: social.homepage,
            facebook: social.facebook && `https://facebook.com/${social.facebook}`,
            github: social.github && `https://github.com/${social.github}`,
            linkedin: resolveLinkedin(social.linkedin),
            medium: social.medium && `https:// medium.com/${social.medium}`,
            instagram: social.instagram && `https://instagram.com/${social.instagram}`,
            twitter: social.twitter && `https://twitter.com/${social.twitter}`,
            youtube: social.youtube && `https://www.youtube.com/${social.youtube}`,
            vk: social.vk && `https://vk.com/${social.vk}`,
        };
        const result = {};
        Object.keys(social).forEach(media => {
            if (rules[media]) {
                result[media] = rules[media];
            }
        });
        return result;
    }
    country(contact) {
        return contact.location.country;
    }
    talks(contact) {
        const talks = lodash_1.flatMap(conferences_1.default, ({ talks }) => talks);
        const talksWithContact = talks.filter(({ people }) => people && people.find(person => person.name === contact.name));
        return talksWithContact;
    }
    workshops(contact) {
        const workshops = lodash_1.flatMap(conferences_1.default, ({ workshops }) => workshops);
        const workshopsWithContact = workshops.filter(({ people }) => people && people.find(person => person.name === contact.name));
        return workshopsWithContact;
    }
};
__decorate([
    type_graphql_1.Query(_ => Contact),
    __param(0, type_graphql_1.Arg("contactName")),
    __param(1, type_graphql_1.Arg("conferenceId", _ => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "contact", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Image_1.Image),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact, Object]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "image", null);
__decorate([
    type_graphql_1.FieldResolver(_ => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "aboutShort", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Social_1.Social),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "social", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Country_1.Country, { deprecationReason: "Use `location` instead" }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "country", null);
__decorate([
    type_graphql_1.FieldResolver(_ => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "talks", null);
__decorate([
    type_graphql_1.FieldResolver(_ => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "workshops", null);
ContactResolver = __decorate([
    type_graphql_1.Resolver(_ => Contact)
], ContactResolver);
exports.ContactResolver = ContactResolver;
function resolveLinkedin(linkedin) {
    if (!linkedin) {
        return "";
    }
    if (linkedin.startsWith("company")) {
        return `https://linkedin.com/${linkedin}`;
    }
    return `https://linkedin.com/in/${linkedin}`;
}
//# sourceMappingURL=Contact.js.map