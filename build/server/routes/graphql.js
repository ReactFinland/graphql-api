"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = __importDefault(require("express-graphql"));
const process_1 = __importDefault(require("process"));
function routeGraphQL(router, schema, projectRoot, mediaUrl) {
    router.all("/graphql", express_graphql_1.default((request) => {
        const hostname = getHostname(request);
        return {
            graphiql: true,
            pretty: true,
            schema,
            context: {
                hostname,
                mediaUrl: `${hostname}${mediaUrl}`,
                projectRoot,
            },
        };
    }));
}
// TODO: Move to utils
function getHostname(req) {
    if (process_1.default.env.HEROKU_HOSTNAME) {
        return process_1.default.env.HEROKU_HOSTNAME;
    }
    return req.protocol + "://" + req.get("host");
}
exports.default = routeGraphQL;
//# sourceMappingURL=graphql.js.map