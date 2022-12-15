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
var Session_1;
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Contact_1 = require("./Contact");
const Interval_1 = require("./Interval");
const Level_1 = __importDefault(require("./Level"));
exports.Level = Level_1.default;
const Location_1 = require("./Location");
const SessionType_1 = __importDefault(require("./SessionType"));
exports.SessionType = SessionType_1.default;
let SessionUrls = class SessionUrls {
};
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], SessionUrls.prototype, "web", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], SessionUrls.prototype, "slides", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], SessionUrls.prototype, "video", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], SessionUrls.prototype, "demo", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], SessionUrls.prototype, "drawing", void 0);
SessionUrls = __decorate([
    type_graphql_1.ObjectType()
], SessionUrls);
exports.SessionUrls = SessionUrls;
let Session = Session_1 = class Session {
};
__decorate([
    type_graphql_1.Field((_) => SessionType_1.default),
    __metadata("design:type", String)
], Session.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field((_) => Level_1.default),
    __metadata("design:type", String)
], Session.prototype, "level", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Session.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field((_) => Boolean),
    __metadata("design:type", Boolean)
], Session.prototype, "hasTitle", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field((_) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Session.prototype, "keywords", void 0);
__decorate([
    type_graphql_1.Field((_) => Location_1.Location, { nullable: true }),
    __metadata("design:type", Location_1.Location)
], Session.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field((_) => [Contact_1.Contact], { nullable: true }),
    __metadata("design:type", Array)
], Session.prototype, "people", void 0);
__decorate([
    type_graphql_1.Field((_) => SessionUrls, { nullable: true }),
    __metadata("design:type", SessionUrls)
], Session.prototype, "urls", void 0);
__decorate([
    type_graphql_1.Field((_) => [Session_1], { nullable: true }),
    __metadata("design:type", Array)
], Session.prototype, "sessions", void 0);
__decorate([
    type_graphql_1.Field((_) => Interval_1.Interval),
    __metadata("design:type", Interval_1.Interval)
], Session.prototype, "parent", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "day", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "begin", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "end", void 0);
Session = Session_1 = __decorate([
    type_graphql_1.ObjectType()
], Session);
exports.Session = Session;
//# sourceMappingURL=Session.js.map