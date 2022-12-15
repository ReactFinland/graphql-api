"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Use browser here instead?
function dayToFinnishLocale(day) {
    const date = new Date(day);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
exports.dayToFinnishLocale = dayToFinnishLocale;
//# sourceMappingURL=date-utils.js.map