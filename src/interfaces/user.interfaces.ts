import { z } from "zod";
import { userBodyCreateSchema, userBodyLoginSchema, userReturnSchema, userSchema } from "../schemas";

type User = z.infer<typeof userSchema>;
type UserBodyCreate = z.infer<typeof userBodyCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserBodyLogin = z.infer<typeof userBodyLoginSchema>;
type UserLoginReturn = {accessToken: string; user: UserReturn};

export { User, UserBodyCreate, UserReturn, UserBodyLogin, UserLoginReturn }