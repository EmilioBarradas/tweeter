import { Post } from "@prisma/client";

export type { Post } from "@prisma/client";
export type { API } from "./src/routers";

export type PostWithComments = Post & { comments: Post[] };
