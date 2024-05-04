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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const services_1 = require("../services");
class TaskController {
    constructor() {
        this.service = new services_1.TaskServices();
        // public create = async (req: Request, res: Response): Promise<Response> => {
        //     const response = await this.service.create(req.body);
        //     return res.status(201).json(response);
        // }
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.decoded.id;
            const response = yield this.service.create(req.body, userId);
            return res.status(201).json(response);
        });
        this.readMany = ({ query }, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = res.locals.decoded) === null || _a === void 0 ? void 0 : _a.id;
            const queryParams = query.category ? String(query.category) : undefined;
            const response = yield this.service.readMany(queryParams, userId);
            return res.status(200).json(response);
        });
        this.readOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.readOne(Number(req.params.id));
            return res.status(200).json(response);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.update(Number(req.params.id), req.body);
            return res.status(200).json(response);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.delete(Number(req.params.id));
            return res.status(204).json();
        });
    }
}
exports.TaskController = TaskController;
