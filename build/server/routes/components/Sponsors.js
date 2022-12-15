"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const React = __importStar(require("react"));
const Contacts_1 = __importDefault(require("./Contacts"));
const Sponsor_1 = __importDefault(require("./Sponsor"));
const SponsorsContainer = styled_1.default.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-left: 0.5cm;
  margin-right: 0.5cm;
`;
const GoldSponsors = styled_1.default.section ``;
const SilverSponsors = styled_1.default.section `
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;
const BronzeSponsors = styled_1.default.section `
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`;
// TODO: Check if the structure can be simplified
const Sponsors = ({ goldSponsors = [], silverSponsors = [], bronzeSponsors = [], rules, }) => (React.createElement(SponsorsContainer, null,
    React.createElement(GoldSponsors, null,
        React.createElement(Contacts_1.default, { items: goldSponsors, render: Sponsor_1.default, renderProps: { rules, type: "gold" } })),
    React.createElement(SilverSponsors, null,
        React.createElement(Contacts_1.default, { items: silverSponsors, render: Sponsor_1.default, renderProps: { rules, type: "silver" } })),
    React.createElement(BronzeSponsors, null,
        React.createElement(Contacts_1.default, { items: bronzeSponsors, render: Sponsor_1.default, renderProps: { rules, type: "bronze" } }))));
exports.default = Sponsors;
//# sourceMappingURL=Sponsors.js.map