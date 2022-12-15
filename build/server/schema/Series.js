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
const Conference_1 = require("./Conference");
let Series = class Series {
};
__decorate([
    type_graphql_1.Field((_) => type_graphql_1.ID),
    __metadata("design:type", String)
], Series.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Series.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field((_) => [Conference_1.Conference]),
    __metadata("design:type", Array)
], Series.prototype, "conferences", void 0);
Series = __decorate([
    type_graphql_1.ObjectType()
], Series);
exports.Series = Series;
//# sourceMappingURL=Series.js.map