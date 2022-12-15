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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Theme_1 = require("../Theme");
const conferenceSeries_1 = __importDefault(require("./conferenceSeries"));
let ThemeResolver = class ThemeResolver {
    themes() {
        return Object.values(conferenceSeries_1.default).map(({ theme }) => theme);
    }
    theme(conferenceId) {
        const series = conferenceSeries_1.default[conferenceId];
        if (series) {
            return series.theme;
        }
        throw new Error("Conference id did not match series");
    }
};
__decorate([
    type_graphql_1.Query(_ => [Theme_1.Theme]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeResolver.prototype, "themes", null);
__decorate([
    type_graphql_1.Query(_ => Theme_1.Theme),
    __param(0, type_graphql_1.Arg("conferenceId", _ => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThemeResolver.prototype, "theme", null);
ThemeResolver = __decorate([
    type_graphql_1.Resolver(_ => Theme_1.Theme)
], ThemeResolver);
exports.default = ThemeResolver;
//# sourceMappingURL=ThemeResolver.js.map