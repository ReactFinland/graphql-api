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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Contact_1 = require("./Contact");
const Location_1 = require("./Location");
const Session_1 = require("./Session");
let Interval = class Interval {
};
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Interval.prototype, "begin", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Interval.prototype, "end", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Interval.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field((_) => [Session_1.Session]),
    __metadata("design:type", Array)
], Interval.prototype, "sessions", void 0);
__decorate([
    type_graphql_1.Field((_) => Location_1.Location, { nullable: true }),
    __metadata("design:type", Location_1.Location)
], Interval.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field((_) => Contact_1.Contact, { nullable: true }),
    __metadata("design:type", Contact_1.Contact)
], Interval.prototype, "mc", void 0);
__decorate([
    type_graphql_1.Field((_) => Session_1.SessionUrls, { nullable: true }),
    __metadata("design:type", Session_1.SessionUrls)
], Interval.prototype, "urls", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Interval.prototype, "drawing", void 0);
Interval = __decorate([
    type_graphql_1.ObjectType()
], Interval);
exports.Interval = Interval;
//# sourceMappingURL=Interval.js.map