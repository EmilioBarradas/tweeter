<script lang="ts">
	import { invalidatePosts } from '$lib/stores/timeline.js';
	import { isSignedIn, user } from '$lib/stores/user.js';
	import { trpc } from '$lib/trpc.js';
	import type { PostWithComments } from 'api';
	import PostContent from './PostContent.svelte';

	export let post: PostWithComments;

	let commentText = '';

	const createComment = async (comment: { post: string; username: string; text: string }) => {
		commentText = '';

		await trpc.createComment.mutate(comment);

		invalidatePosts();
	};
</script>

<article>
	{#if isSignedIn($user)}
		{@const displayName = $user.displayName}

		<PostContent {post} />

		<div style="padding-left: 32px; border-left: 1px solid #1f2d38">
			{#each post.comments as comment}
				<PostContent post={comment} />
			{/each}
		</div>

		<footer>
			<form>
				<textarea id="comment" name="Post Comment" cols="30" rows="4" bind:value={commentText} />

				<a
					href="/"
					role="button"
					class="secondary"
					on:click|preventDefault={() =>
						createComment({ post: post.id, username: displayName ?? 'Unknown', text: commentText })}
				>
					Comment
				</a>
			</form>
		</footer>
	{/if}
</article>
