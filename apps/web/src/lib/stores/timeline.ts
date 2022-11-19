import { trpc } from '$lib/trpc';
import { writable } from 'svelte/store';

const getPosts = async () => {
	return trpc.getPosts.query().then((posts) => posts.reverse());
};

export const invalidatePosts = () => {
	timeline.set(getPosts());
};

export const timeline = writable(getPosts());
