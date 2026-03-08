"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_json_1 = __importDefault(require("./user.json"));
console.log(user_json_1.default);
// const userAge: number = user.isAdmin;
const userAge = user_json_1.default.age;
