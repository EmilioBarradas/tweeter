import { router } from "../../trpc";
import { createComment } from "./create";

export const commentsRouter = router({
	createComment,
});
