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
const Contact_1 = require("../Contact");
const Session_1 = require("../Session");
let SessionResolver = class SessionResolver {
    speakers(session) {
        return session.people || [];
    }
    title(session) {
        return session.title || "Mysterious talk";
    }
    hasTitle(session) {
        return !!session.title;
    }
};
__decorate([
    type_graphql_1.FieldResolver((_) => [Contact_1.Contact], {
        deprecationReason: "Use `people` instead",
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Session_1.Session]),
    __metadata("design:returntype", void 0)
], SessionResolver.prototype, "speakers", null);
__decorate([
    type_graphql_1.FieldResolver((_) => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Session_1.Session]),
    __metadata("design:returntype", void 0)
], SessionResolver.prototype, "title", null);
__decorate([
    type_graphql_1.FieldResolver((_) => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Session_1.Session]),
    __metadata("design:returntype", void 0)
], SessionResolver.prototype, "hasTitle", null);
SessionResolver = __decorate([
    type_graphql_1.Resolver((_) => Session_1.Session)
], SessionResolver);
exports.default = SessionResolver;
//# sourceMappingURL=SessionResolver.js.map