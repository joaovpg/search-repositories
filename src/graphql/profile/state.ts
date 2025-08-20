import { makeVar } from "@apollo/client";

export const userVar = makeVar<string>("");

export const cursorVar = makeVar<string>("");
