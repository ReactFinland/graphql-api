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
const type_graphql_1 = require("type-graphql");
const Country_1 = require("./Country");
const Image_1 = require("./Image");
const Social_1 = require("./Social");
let Location = class Location {
};
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "about", void 0);
__decorate([
    type_graphql_1.Field((_) => Image_1.Image, { nullable: true }),
    __metadata("design:type", Image_1.Image)
], Location.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field((_) => Social_1.Social, { nullable: true }),
    __metadata("design:type", Social_1.Social)
], Location.prototype, "social", void 0);
__decorate([
    type_graphql_1.Field((_) => Country_1.Country, { nullable: true }),
    __metadata("design:type", Country_1.Country)
], Location.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "address", void 0);
Location = __decorate([
    type_graphql_1.ObjectType()
], Location);
exports.Location = Location;
let LocationResolver = class LocationResolver {
    image(location, ctx) {
        return {
            url: location.image ? `${ctx.mediaUrl}/${location.image.url}` : "",
        };
    }
};
__decorate([
    type_graphql_1.FieldResolver((_) => Image_1.Image),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Location, Object]),
    __metadata("design:returntype", void 0)
], LocationResolver.prototype, "image", null);
LocationResolver = __decorate([
    type_graphql_1.Resolver((_) => Location)
], LocationResolver);
exports.LocationResolver = LocationResolver;
//# sourceMappingURL=Location.js.map