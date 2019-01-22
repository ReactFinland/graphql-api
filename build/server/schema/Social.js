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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
"use strict";
const graphql_scalars_1 = require("@okgrow/graphql-scalars");
const type_graphql_1 = require("type-graphql");
const scalars_1 = require("./scalars");
let Social = class Social {
};
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_a = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _a : Object)
], Social.prototype, "homepage", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_b = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _b : Object)
], Social.prototype, "twitter", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _c : Object)
], Social.prototype, "github", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_d = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _d : Object)
], Social.prototype, "facebook", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_e = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _e : Object)
], Social.prototype, "medium", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_f = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _f : Object)
], Social.prototype, "instagram", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_g = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _g : Object)
], Social.prototype, "linkedin", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_h = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _h : Object)
], Social.prototype, "youtube", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_j = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _j : Object)
], Social.prototype, "vk", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_k = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _k : Object)
], Social.prototype, "pinterest", void 0);
__decorate([
    type_graphql_1.Field(_ => scalars_1.UrlScalar, { nullable: true }),
    __metadata("design:type", typeof (_l = typeof graphql_scalars_1.Url !== "undefined" && graphql_scalars_1.Url) === "function" ? _l : Object)
], Social.prototype, "vimeo", void 0);
Social = __decorate([
    type_graphql_1.ObjectType()
], Social);
exports.Social = Social;
//# sourceMappingURL=Social.js.map