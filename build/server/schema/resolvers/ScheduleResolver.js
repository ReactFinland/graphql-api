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
const Conference_1 = require("../Conference");
const Schedule_1 = require("../Schedule");
let ScheduleResolver = class ScheduleResolver {
    schedule(conferenceId, day) {
        return getSchedule(conferenceId, day);
    }
};
__decorate([
    type_graphql_1.Query(_ => Schedule_1.Schedule),
    __param(0, type_graphql_1.Arg("conferenceId", _ => type_graphql_1.ID)),
    __param(1, type_graphql_1.Arg("day")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ScheduleResolver.prototype, "schedule", null);
ScheduleResolver = __decorate([
    type_graphql_1.Resolver(_ => Schedule_1.Schedule)
], ScheduleResolver);
function getSchedule(id, day) {
    const conference = Conference_1.getConference(id);
    const schedule = conference.schedules.find(c => c.day === day);
    if (schedule) {
        return schedule;
    }
    else {
        throw new Error("Invalid date");
    }
}
exports.default = ScheduleResolver;
//# sourceMappingURL=ScheduleResolver.js.map