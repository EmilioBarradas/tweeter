import { procedure } from "../../trpc";
import { z } from "zod";
import { prisma } from "../../prisma";

const CreatePostSchema = z.object({ username: z.string(), text: z.string() });

const _createPost = async (post: z.infer<typeof CreatePostSchema>) => {
	await prisma.post.create({
		data: post,
	});
};

export const createPost = procedure
	.input(CreatePostSchema)
	.mutation(({ input }) => _createPost(input));
