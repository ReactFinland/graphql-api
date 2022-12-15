"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const freezing_edge_2020_1 = __importDefault(require("../content/freezing-edge-2020"));
const future_frontend_2023_1 = __importDefault(require("../content/future-frontend-2023"));
const graphql_finland_2018_1 = __importDefault(require("../content/graphql-finland-2018"));
const graphql_finland_2020_1 = __importDefault(require("../content/graphql-finland-2020"));
const halfstack_vienna_2019_1 = __importDefault(require("../content/halfstack-vienna-2019"));
const react_finland_2018_1 = __importDefault(require("../content/react-finland-2018"));
const react_finland_2019_1 = __importDefault(require("../content/react-finland-2019"));
const react_finland_2020_1 = __importDefault(require("../content/react-finland-2020"));
const react_finland_2021_1 = __importDefault(require("../content/react-finland-2021"));
const react_finland_2022_1 = __importDefault(require("../content/react-finland-2022"));
const reason_conf_2019_1 = __importDefault(require("../content/reason-conf-2019"));
const techmovienight_1 = __importDefault(require("../content/techmovienight"));
const typeof_2019_1 = __importDefault(require("../content/typeof-2019"));
const conferences = {
    ["freezing-edge-2020"]: attachParents(freezing_edge_2020_1.default),
    ["future-frontend-2023"]: attachParents(future_frontend_2023_1.default),
    ["techmovienight"]: attachParents(techmovienight_1.default),
    ["halfstack-vienna-2019"]: attachParents(halfstack_vienna_2019_1.default),
    ["reason-conf-2019"]: attachParents(reason_conf_2019_1.default),
    ["react-finland-2018"]: attachParents(react_finland_2018_1.default),
    ["react-finland-2019"]: attachParents(react_finland_2019_1.default),
    ["react-finland-2020"]: attachParents(react_finland_2020_1.default),
    ["react-finland-2021"]: attachParents(react_finland_2021_1.default),
    ["react-finland-2022"]: attachParents(react_finland_2022_1.default),
    ["typeof-2019"]: attachParents(typeof_2019_1.default),
    ["graphql-finland-2018"]: attachParents(graphql_finland_2018_1.default),
    ["graphql-finland-2020"]: attachParents(graphql_finland_2020_1.default),
};
function attachParents(conference) {
    return Object.assign(Object.assign({}, conference), { schedules: conference.schedules.map((schedule) => (Object.assign(Object.assign({}, schedule), { intervals: schedule.intervals.map((interval) => (Object.assign(Object.assign({}, interval), { sessions: interval.sessions.map((session) => (Object.assign(Object.assign({}, session), { day: schedule.day, begin: interval.begin, end: interval.end }))) }))) }))) });
}
exports.default = conferences;
//# sourceMappingURL=conferences.js.map