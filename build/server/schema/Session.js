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
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c;
"use strict";
const graphql_scalars_1 = require("@okgrow/graphql-scalars");
const type_graphql_1 = require("type-graphql");
const Contact_1 = require("./Contact");
const Location_1 = require("./Location");
const scalars_1 = require("./scalars");
let SessionUrls = class SessionUrls {
};
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_a = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _a : Object)
], SessionUrls.prototype, "web", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_b = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _b : Object)
], SessionUrls.prototype, "slides", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _c : Object)
], SessionUrls.prototype, "video", void 0);
SessionUrls = __decorate([
    type_graphql_1.ObjectType()
], SessionUrls);
exports.SessionUrls = SessionUrls;
let Session = class Session {
};
__decorate([
    type_graphql_1.Field(_ => SessionType),
    __metadata("design:type", Number)
], Session.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Session.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(_ => String, { nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(_ => [String], { nullable: true }),
    __metadata("design:type", Array)
], Session.prototype, "keywords", void 0);
__decorate([
    type_graphql_1.Field(_ => Location_1.Location, { nullable: true }),
    __metadata("design:type", Location_1.Location)
], Session.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(_ => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Session.prototype, "people", void 0);
__decorate([
    type_graphql_1.Field(_ => SessionUrls, { nullable: true }),
    __metadata("design:type", SessionUrls)
], Session.prototype, "urls", void 0);
Session = __decorate([
    type_graphql_1.ObjectType()
], Session);
exports.Session = Session;
let SessionResolver = class SessionResolver {
    speakers(session) {
        return session.people || [];
    }
};
__decorate([
    type_graphql_1.FieldResolver(_ => [Contact_1.Contact], { deprecationReason: "Use `people` instead" }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Session]),
    __metadata("design:returntype", void 0)
], SessionResolver.prototype, "speakers", null);
SessionResolver = __decorate([
    type_graphql_1.Resolver(_ => Session)
], SessionResolver);
exports.SessionResolver = SessionResolver;
var SessionType;
(function (SessionType) {
    SessionType[SessionType["TALK"] = 0] = "TALK";
    SessionType[SessionType["LIGHTNING_TALK"] = 1] = "LIGHTNING_TALK";
    SessionType[SessionType["KEYNOTE"] = 2] = "KEYNOTE";
    SessionType[SessionType["WORKSHOP"] = 3] = "WORKSHOP";
    SessionType[SessionType["PANEL"] = 4] = "PANEL";
    SessionType[SessionType["BREAKFAST"] = 5] = "BREAKFAST";
    SessionType[SessionType["LUNCH"] = 6] = "LUNCH";
    SessionType[SessionType["COFFEE_BREAK"] = 7] = "COFFEE_BREAK";
    SessionType[SessionType["ORGANIZATIONAL"] = 8] = "ORGANIZATIONAL";
    SessionType[SessionType["PARTY"] = 9] = "PARTY";
})(SessionType = exports.SessionType || (exports.SessionType = {}));
type_graphql_1.registerEnumType(SessionType, {
    name: "SessionType",
    description: "Type of the session",
});
//# sourceMappingURL=Session.js.map