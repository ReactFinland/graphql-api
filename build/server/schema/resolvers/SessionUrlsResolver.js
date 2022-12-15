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
const Session_1 = require("../Session");
let SessionUrlsResolver = class SessionUrlsResolver {
    drawing(root, ctx) {
        if (!root.drawing) {
            return;
        }
        // FIXME: Figure out why ctx can be missing
        return `${ctx ? ctx.mediaUrl : "/media"}/${root.drawing}`;
    }
};
__decorate([
    type_graphql_1.FieldResolver((_) => String),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SessionUrlsResolver.prototype, "drawing", null);
SessionUrlsResolver = __decorate([
    type_graphql_1.Resolver((_) => Session_1.SessionUrls)
], SessionUrlsResolver);
exports.default = SessionUrlsResolver;
//# sourceMappingURL=SessionUrlsResolver.js.map