import { mergeRouters } from "../trpc";
import { commentsRouter } from "./comments";
import { postsRouter } from "./posts";

export const router = mergeRouters(postsRouter, commentsRouter);

export type API = typeof router;
