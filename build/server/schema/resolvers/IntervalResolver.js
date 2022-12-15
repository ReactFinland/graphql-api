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
const Interval_1 = require("../Interval");
const Session_1 = require("../Session");
const Conference_1 = require("../Conference");
let IntervalResolver = class IntervalResolver {
    interval(conferenceId, intervalTitle) {
        const conference = Conference_1.getConference(conferenceId);
        let ret;
        // This picks up only the last match right now
        conference.schedules.forEach(({ intervals }) => {
            const found = intervals.find(({ title }) => title === intervalTitle);
            if (found) {
                ret = found;
            }
        });
        return ret;
    }
    sessions(interval) {
        return interval.sessions.map((session) => (Object.assign(Object.assign({}, session), { interval })));
    }
};
__decorate([
    type_graphql_1.Query((_) => Interval_1.Interval),
    __param(0, type_graphql_1.Arg("conferenceId", (_) => type_graphql_1.ID)),
    __param(1, type_graphql_1.Arg("intervalTitle", (_) => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IntervalResolver.prototype, "interval", null);
__decorate([
    type_graphql_1.FieldResolver((_) => [Session_1.Session]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Interval_1.Interval]),
    __metadata("design:returntype", void 0)
], IntervalResolver.prototype, "sessions", null);
IntervalResolver = __decorate([
    type_graphql_1.Resolver((_) => Interval_1.Interval)
], IntervalResolver);
exports.default = IntervalResolver;
//# sourceMappingURL=IntervalResolver.js.map