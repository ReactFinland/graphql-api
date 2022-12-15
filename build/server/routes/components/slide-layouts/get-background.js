"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBackground(background) {
    return background ? `${linearGradient()},url(${background.url})` : "";
}
// TODO: Make this more flexible
function linearGradient() {
    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(65, 35, 0, 0.05))`;
}
exports.default = getBackground;
//# sourceMappingURL=get-background.js.map