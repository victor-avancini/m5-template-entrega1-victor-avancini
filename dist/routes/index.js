"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.taskRouter = exports.categoryRouter = void 0;
var category_routes_1 = require("./category.routes");
Object.defineProperty(exports, "categoryRouter", { enumerable: true, get: function () { return category_routes_1.categoryRouter; } });
var task_routes_1 = require("./task.routes");
Object.defineProperty(exports, "taskRouter", { enumerable: true, get: function () { return task_routes_1.taskRouter; } });
var user_routes_1 = require("./user.routes");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return user_routes_1.userRouter; } });
