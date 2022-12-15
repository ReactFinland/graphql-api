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
const Image_1 = require("./Image");
let Colors = class Colors {
};
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Colors.prototype, "primary", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Colors.prototype, "secondary", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Colors.prototype, "text", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Colors.prototype, "background", void 0);
Colors = __decorate([
    type_graphql_1.ObjectType()
], Colors);
exports.Colors = Colors;
// TODO: Likely this should be modelled a a union
let Font = class Font {
};
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Font.prototype, "family", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Font.prototype, "weight", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Font.prototype, "style", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Font.prototype, "fileName", void 0);
__decorate([
    type_graphql_1.Field((_) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Font.prototype, "formats", void 0);
__decorate([
    type_graphql_1.Field((_) => String, { nullable: true }),
    __metadata("design:type", String)
], Font.prototype, "href", void 0);
Font = __decorate([
    type_graphql_1.ObjectType()
], Font);
exports.Font = Font;
let Fonts = class Fonts {
};
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Fonts.prototype, "primary", void 0);
__decorate([
    type_graphql_1.Field((_) => String),
    __metadata("design:type", String)
], Fonts.prototype, "secondary", void 0);
__decorate([
    type_graphql_1.Field((_) => [Font]),
    __metadata("design:type", Array)
], Fonts.prototype, "variants", void 0);
Fonts = __decorate([
    type_graphql_1.ObjectType()
], Fonts);
exports.Fonts = Fonts;
let WithWithoutText = class WithWithoutText {
};
__decorate([
    type_graphql_1.Field((_) => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], WithWithoutText.prototype, "withoutText", void 0);
__decorate([
    type_graphql_1.Field((_) => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], WithWithoutText.prototype, "withText", void 0);
WithWithoutText = __decorate([
    type_graphql_1.ObjectType()
], WithWithoutText);
exports.WithWithoutText = WithWithoutText;
let Logos = class Logos {
};
__decorate([
    type_graphql_1.Field((_) => WithWithoutText),
    __metadata("design:type", WithWithoutText)
], Logos.prototype, "black", void 0);
__decorate([
    type_graphql_1.Field((_) => WithWithoutText),
    __metadata("design:type", WithWithoutText)
], Logos.prototype, "colored", void 0);
__decorate([
    type_graphql_1.Field((_) => WithWithoutText),
    __metadata("design:type", WithWithoutText)
], Logos.prototype, "white", void 0);
Logos = __decorate([
    type_graphql_1.ObjectType()
], Logos);
exports.Logos = Logos;
// TODO: Add fonts here (name + path)
let Theme = class Theme {
};
__decorate([
    type_graphql_1.Field((_) => type_graphql_1.ID),
    __metadata("design:type", String)
], Theme.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field((_) => Fonts),
    __metadata("design:type", Fonts)
], Theme.prototype, "fonts", void 0);
__decorate([
    type_graphql_1.Field((_) => Image_1.Image),
    __metadata("design:type", Array)
], Theme.prototype, "textures", void 0);
__decorate([
    type_graphql_1.Field((_) => Colors),
    __metadata("design:type", Colors)
], Theme.prototype, "colors", void 0);
__decorate([
    type_graphql_1.Field((_) => Logos),
    __metadata("design:type", Logos)
], Theme.prototype, "logos", void 0);
Theme = __decorate([
    type_graphql_1.ObjectType()
], Theme);
exports.Theme = Theme;
//# sourceMappingURL=Theme.js.map