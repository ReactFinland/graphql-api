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
const Session_1 = require("./Session");
let Interval = class Interval {
};
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Interval.prototype, "begin", void 0);
__decorate([
    type_graphql_1.Field(_ => String),
    __metadata("design:type", String)
], Interval.prototype, "end", void 0);
__decorate([
    type_graphql_1.Field(_ => String, { nullable: true }),
    __metadata("design:type", String)
], Interval.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(_ => [Session_1.Session]),
    __metadata("design:type", Array)
], Interval.prototype, "sessions", void 0);
Interval = __decorate([
    type_graphql_1.ObjectType()
], Interval);
exports.Interval = Interval;
let IntervalResolver = class IntervalResolver {
    sessions(interval) {
        return interval.sessions.map(session => (Object.assign({}, session, { interval })));
    }
};
__decorate([
    type_graphql_1.FieldResolver(_ => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Interval]),
    __metadata("design:returntype", void 0)
], IntervalResolver.prototype, "sessions", null);
IntervalResolver = __decorate([
    type_graphql_1.Resolver(_ => Interval)
], IntervalResolver);
exports.IntervalResolver = IntervalResolver;
//# sourceMappingURL=Interval.js.map