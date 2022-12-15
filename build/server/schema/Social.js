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
let Social = class Social {
};
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "homepage", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "twitter", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "github", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "facebook", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "googleMaps", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "medium", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "instagram", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "linkedin", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "youtube", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "vk", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "pinterest", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "vimeo", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "dribble", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "devto", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "twitch", void 0);
Social = __decorate([
    type_graphql_1.ObjectType()
], Social);
exports.Social = Social;
//# sourceMappingURL=Social.js.map