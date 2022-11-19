import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const { mergeRouters, middleware, procedure, router } = t;
