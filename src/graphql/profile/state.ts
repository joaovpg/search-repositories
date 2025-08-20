import type { IRepository } from "@/interface/IRepository";
import { makeVar } from "@apollo/client";

export const userVar = makeVar<string>("");
export const cursorVar = makeVar<string>("");
export const repositoryListVar = makeVar<IRepository[]>([]);
