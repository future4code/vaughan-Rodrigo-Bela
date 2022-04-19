"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const connection = (0, knex_1.default)({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "21712652-rodrigo-bela",
        password: "bGzr6iYi3R53jcnT8w6U",
        database: "vaughan-21712652-rodrigo-bela",
        multiStatements: true,
    }
});
exports.default = connection;
//# sourceMappingURL=connection.js.map