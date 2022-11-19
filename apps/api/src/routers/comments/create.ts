import { z } from "zod";
import { prisma } from "../../prisma";
import { procedure } from "../../trpc";
import { postExists } from "../posts/get";

const CreateCommentSchema = z.object({
	post: z.string().refine(postExists, "Post does not exist."),
	username: z.string(),
	text: z.string(),
});

const _createComment = async (comment: z.infer<typeof CreateCommentSchema>) => {
	await prisma.post.update({
		where: {
			id: comment.post,
		},
		data: {
			comments: {
				create: [
					{
						username: comment.username,
						text: comment.text,
					},
				],
			},
		},
	});
};

export const createComment = procedure
	.input(CreateCommentSchema)
	.mutation(({ input }) => _createComment(input));
