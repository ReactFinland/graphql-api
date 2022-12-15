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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flatMap_1 = __importDefault(require("lodash/flatMap"));
const uniq_1 = __importDefault(require("lodash/uniq"));
const type_graphql_1 = require("type-graphql");
const Interval_1 = require("./Interval");
const Location_1 = require("./Location");
let Schedule = class Schedule {
};
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Schedule.prototype, "day", void 0);
__decorate([
    type_graphql_1.Field((_) => Location_1.Location, { nullable: true }),
    __metadata("design:type", Location_1.Location)
], Schedule.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Schedule.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field((_) => [Interval_1.Interval]),
    __metadata("design:type", Array)
], Schedule.prototype, "intervals", void 0);
Schedule = __decorate([
    type_graphql_1.ObjectType()
], Schedule);
exports.Schedule = Schedule;
function resolveSessions(schedules, sessionTypes) {
    return uniq_1.default(flatMap_1.default(schedules, ({ intervals }) => flatMap_1.default(intervals, ({ sessions }) => flatMap_1.default(sessions, (session) => [session].concat(session.sessions || [])).filter(({ type }) => sessionTypes.includes(type)))));
}
exports.resolveSessions = resolveSessions;
//# sourceMappingURL=Schedule.js.map