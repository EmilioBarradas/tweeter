import { Post } from "@prisma/client";
import { startServer } from "./server";

startServer();

export type { Post } from "@prisma/client";
export type { API } from "./routers";

export type PostWithComments = Post & { comments: Post[] };
