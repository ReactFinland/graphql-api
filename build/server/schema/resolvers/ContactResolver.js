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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const locations = __importStar(require("../../../content/locations"));
const people = __importStar(require("../../../content/people"));
const sponsors = __importStar(require("../../../content/sponsors"));
const Conference_1 = require("../Conference");
const Contact_1 = require("../Contact");
const Country_1 = require("../Country");
const Image_1 = require("../Image");
const Schedule_1 = require("../Schedule");
const SessionType_1 = __importDefault(require("../SessionType"));
const Social_1 = require("../Social");
let ContactResolver = class ContactResolver {
    contact(contactName, conferenceId) {
        const conference = Conference_1.getConference(conferenceId);
        const sponsor = conference.sponsors.find(({ name }) => name === contactName);
        const organizer = Object.values(conference.organizers).find(({ name }) => name === contactName);
        const talks = Schedule_1.resolveSessions(conference.schedules, [
            SessionType_1.default.LIGHTNING_TALK,
            SessionType_1.default.TALK,
            SessionType_1.default.KEYNOTE,
            SessionType_1.default.PANEL,
        ]);
        const speaker = Contact_1.getSessionSpeakers(conference, talks).find(({ name }) => name === contactName);
        const workshops = Schedule_1.resolveSessions(conference.schedules, [
            SessionType_1.default.WORKSHOP,
        ]);
        const workshopInstructor = Contact_1.getSessionSpeakers(conference, workshops).find(({ name }) => name === contactName);
        const mc = conference.mcs && conference.mcs.find(({ name }) => name === contactName);
        const contact = sponsor || organizer || speaker || workshopInstructor || mc;
        if (!contact) {
            throw new Error(`Contact ${contactName} wasn't found!`);
        }
        return contact;
    }
    locations() {
        return Object.values(locations);
    }
    people() {
        return Object.values(people);
    }
    sponsors() {
        return Object.values(sponsors);
    }
    type(contact) {
        return contact.type || [];
    }
    firstName(contact) {
        return contact.firstName || contact.name.split(" ")[0];
    }
    lastName(contact) {
        return (contact.lastName ||
            /* TODO: This approximation isn't accurate always */
            contact.name
                .split(" ")
                .slice(1)
                .join(" "));
    }
    image(contact, ctx) {
        if (!contact.image) {
            return {
                url: "",
            };
        }
        if (contact.image.url.startsWith("http")) {
            return contact.image;
        }
        // FIXME: Figure out why ctx can be missing
        return {
            url: `${ctx ? ctx.mediaUrl : "/media"}/${contact.image.url}`,
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
        if (!social) {
            return {};
        }
        // TODO: These resolvers should fork so you get url + original value
        // as that's needed sometimes
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
};
__decorate([
    type_graphql_1.Query(_ => Contact_1.Contact),
    __param(0, type_graphql_1.Arg("contactName")),
    __param(1, type_graphql_1.Arg("conferenceId", _ => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "contact", null);
__decorate([
    type_graphql_1.Query(_ => [Contact_1.Contact]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "locations", null);
__decorate([
    type_graphql_1.Query(_ => [Contact_1.Contact]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "people", null);
__decorate([
    type_graphql_1.Query(_ => [Contact_1.Contact]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "sponsors", null);
__decorate([
    type_graphql_1.FieldResolver(_ => [Contact_1.ContactType]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "type", null);
__decorate([
    type_graphql_1.FieldResolver(_ => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "firstName", null);
__decorate([
    type_graphql_1.FieldResolver(_ => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "lastName", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Image_1.Image),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact, Object]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "image", null);
__decorate([
    type_graphql_1.FieldResolver(_ => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "aboutShort", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Social_1.Social),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "social", null);
__decorate([
    type_graphql_1.FieldResolver(_ => Country_1.Country, { deprecationReason: "Use `location` instead" }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Contact_1.Contact]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "country", null);
ContactResolver = __decorate([
    type_graphql_1.Resolver(_ => Contact_1.Contact)
], ContactResolver);
function resolveLinkedin(linkedin) {
    if (!linkedin) {
        return "";
    }
    if (linkedin.startsWith("company")) {
        return `https://linkedin.com/${linkedin}`;
    }
    return `https://linkedin.com/in/${linkedin}`;
}
exports.default = ContactResolver;
//# sourceMappingURL=ContactResolver.js.map