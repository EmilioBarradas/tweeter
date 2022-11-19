import { router } from "../../trpc";
import { createPost } from "./create";
import { deletePosts } from "./delete";
import { getPosts } from "./get";

export const postsRouter = router({
	getPosts,
	createPost,
	deletePosts,
});
