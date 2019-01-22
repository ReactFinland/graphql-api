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
const Country_1 = require("./Country");
const Image_1 = require("./Image");
const Social_1 = require("./Social");
let Location = class Location {
};
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Location.prototype, "about", void 0);
__decorate([
    type_graphql_1.Field(_ => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], Location.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field(_ => Social_1.Social),
    __metadata("design:type", Social_1.Social)
], Location.prototype, "social", void 0);
__decorate([
    type_graphql_1.Field(_ => Country_1.Country),
    __metadata("design:type", Country_1.Country)
], Location.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Location.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Location.prototype, "address", void 0);
Location = __decorate([
    type_graphql_1.ObjectType()
], Location);
exports.Location = Location;
//# sourceMappingURL=Location.js.map