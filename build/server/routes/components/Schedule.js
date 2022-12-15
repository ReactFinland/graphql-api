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
const map_1 = __importDefault(require("lodash/map"));
const React = __importStar(require("react"));
const SessionType_1 = __importDefault(require("../../schema/SessionType"));
// TODO: Move control for margin/height to consumer
const ScheduleContainer = styled_1.default.dl `
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 10cm;
`;
const ScheduleContainerItem = styled_1.default.div `
  width: 50%;
  margin-bottom: 0.25cm;
  display: grid;
  grid-template-columns: 0.5fr 1.9fr;
  font-size: 83%;

  &:first-of-type {
    margin-top: -0.6cm;
  }
`;
const ScheduleTitle = styled_1.default.dt `
  display: inline;
  overflow: hidden;
  font-size: 150%;
  font-family: monospace;
  color: ${({ color, type }) => [
    SessionType_1.default.BREAKFAST,
    SessionType_1.default.COFFEE_BREAK,
    SessionType_1.default.PARTY,
    SessionType_1.default.LUNCH,
    SessionType_1.default.ORGANIZATIONAL,
].includes(type)
    ? color
    : "inherit"};
`;
const ScheduleDefinition = styled_1.default.dd `
  display: inline;
  font-size: 99%;
  margin-left: 0cm;
  text-align: left;
  overflow: hidden;
  line-height: 1.45;
`;
function Schedule({ theme, intervals }) {
    if (!intervals) {
        return null;
    }
    return (React.createElement(ScheduleContainer, null, map_1.default(intervals, ({ begin, end, sessions, title }, i) => (React.createElement(ScheduleContainerItem, { key: `schedule-container-${i}` },
        React.createElement(ScheduleTitle, { key: `dt-${i}`, color: theme.colors.secondary, type: sessions[0] && sessions[0].type },
            begin,
            "-",
            end),
        React.createElement(ScheduleDefinition, { key: `dd-${i}` }, sessions.length > 0 ? (sessions.map(({ title, type, people }, i) => (React.createElement(SessionTitle, { key: i, title: title, type: type, people: people })))) : (React.createElement(SessionTitle, { title: title }))))))));
}
const SessionTitleContainer = styled_1.default.h3 `
  margin-bottom: 0.15cm;
`;
function SessionTitle({ title, type, people = [] }) {
    return (React.createElement(SessionTitleContainer, null,
        title,
        " ",
        people &&
            Array.isArray(people) &&
            people.length > 0 &&
            `- ${people[0].name}`,
        " "));
}
/*
function ScheduleIcon({ type }) {
  const scheduleTypes = {
    KEYNOTE: { icon: "🗝", title: "Keynote" },
    LIGHTNING_TALK: { icon: "⚡️", title: "Lightning talk" },
    TALK: { icon: "🎙", title: "Presentation" },
    PANEL: { icon: "🙋", title: "Panel" },
    WORKSHOP: { icon: "👩‍💻", title: "Workshop" },
    COFFEE_BREAK: { icon: "☕", title: "Coffee break" },
    BREAKFAST: { icon: "🥐", title: "Breakfast" },
    LUNCH: { icon: "🍕", title: "Lunch" },
    ORGANIZATIONAL: { icon: "💤", title: "Organizational" },
    PARTY: { icon: "🎉", title: "Party at Gofore office" },
  };

  return (
    <span title={scheduleTypes[type].title}>
      {emoji(scheduleTypes[type].icon)}
    </span>
  );
}
*/
exports.default = Schedule;
//# sourceMappingURL=Schedule.js.map