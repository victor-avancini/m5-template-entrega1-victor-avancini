"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const bcrypt_1 = require("bcrypt");
const bcrypt_2 = __importDefault(require("bcrypt"));
const prisma_1 = require("../database/prisma");
const schemas_1 = require("../schemas");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../errors/appError");
class UserServices {
    constructor() {
        this.user = prisma_1.prisma.user;
        this.create = (body) => __awaiter(this, void 0, void 0, function* () {
            body.password = yield (0, bcrypt_1.hash)(body.password, 10);
            const newUser = yield this.user.create({ data: body });
            return schemas_1.userReturnSchema.parse(newUser);
        });
        this.login = (body) => __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.user.findFirst({ where: { email: body.email } });
            if (!foundUser) {
                throw new appError_1.AppError(404, "User not exists");
            }
            const compare = yield bcrypt_2.default.compare(body.password, foundUser.password);
            if (!compare) {
                throw new appError_1.AppError(401, "Email and password doesn't match");
            }
            const token = jsonwebtoken_1.default.sign(body, process.env.JWT_SECRET);
            return { accessToken: token, user: schemas_1.userReturnSchema.parse(foundUser) };
        });
        this.getUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.user.findFirst({ where: { id } });
            return schemas_1.userReturnSchema.parse(user);
        });
    }
}
exports.UserServices = UserServices;
