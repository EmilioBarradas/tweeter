import { prisma } from "../../prisma";
import { procedure } from "../../trpc";

export const getPost = (id: string) => {
	return prisma.post.findFirst({
		where: {
			id,
		},
	});
};

export const postExists = async (id: string) => {
	return (await getPost(id)) !== null;
};

const _getPosts = () => {
	return prisma.post.findMany({
		where: {
			parentId: null,
		},
		include: {
			comments: true,
		},
	});
};

export const getPosts = procedure.query(_getPosts);
