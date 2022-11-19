import { z } from "zod";
import { prisma } from "../../prisma";
import { procedure } from "../../trpc";

const DeletePostsSchema = z.object({ username: z.string() });

const _deletePosts = async ({
	username,
}: z.infer<typeof DeletePostsSchema>) => {
	await prisma.post.deleteMany({
		where: {
			username,
		},
	});
};

export const deletePosts = procedure
	.input(DeletePostsSchema)
	.mutation(({ input }) => _deletePosts(input));
