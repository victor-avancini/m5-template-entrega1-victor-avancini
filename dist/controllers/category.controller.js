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
exports.CategoryController = void 0;
const services_1 = require("../services");
class CategoryController {
    constructor() {
        this.service = new services_1.CategoryServices();
        // public create = async (req: Request, res: Response): Promise<Response> => {
        //     const response = await this.service.create(req.body);
        //     return res.status(201).json(response);
        // }
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.decoded.id;
            const response = yield this.service.create(req.body, userId);
            return res.status(201).json(response);
        });
        // public delete = async (req: Request, res: Response): Promise<Response> => {
        //     await this.service.delete(Number(req.params.id));
        //     return res.status(204).json();
        // }
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.service.delete(Number(req.params.id));
            return res.status(204).json();
        });
    }
}
exports.CategoryController = CategoryController;
