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
const conferences_1 = __importDefault(require("../../conferences"));
const Conference_1 = require("../Conference");
const Series_1 = require("../Series");
const conferenceSeries_1 = __importDefault(require("./conferenceSeries"));
let SeriesResolver = class SeriesResolver {
    series(id) {
        if (conferenceSeries_1.default[id]) {
            return conferenceSeries_1.default[id];
        }
        else {
            throw new Error("Unknown conference");
        }
    }
    allSeries() {
        return Object.keys(conferenceSeries_1.default).map(id => conferenceSeries_1.default[id]);
    }
    conferences(series) {
        return Object.values(conferences_1.default).filter(conference => series.name === conference.series);
    }
};
__decorate([
    type_graphql_1.Query(_ => Series_1.Series),
    __param(0, type_graphql_1.Arg("id", _ => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeriesResolver.prototype, "series", null);
__decorate([
    type_graphql_1.Query(_ => [Series_1.Series]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeriesResolver.prototype, "allSeries", null);
__decorate([
    type_graphql_1.FieldResolver(_ => [Conference_1.Conference]),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Series_1.Series]),
    __metadata("design:returntype", void 0)
], SeriesResolver.prototype, "conferences", null);
SeriesResolver = __decorate([
    type_graphql_1.Resolver(_ => Series_1.Series)
], SeriesResolver);
exports.default = SeriesResolver;
//# sourceMappingURL=SeriesResolver.js.map