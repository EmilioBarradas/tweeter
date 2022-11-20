<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import { auth } from '$lib/firebase.js';
	import { invalidatePosts, timeline } from '$lib/stores/timeline.js';
	import { isSignedIn, user } from '$lib/stores/user.js';
	import { trpc } from '$lib/trpc.js';
	import { GoogleAuthProvider, signInWithPopup, signOut as signOutAuth } from 'firebase/auth';

	let text = '';

	const createPost = async (post: { username: string; text: string }) => {
		text = '';

		await trpc.createPost.mutate(post);

		invalidatePosts();
	};

	const deletePosts = async (options: { username: string }) => {
		await trpc.deletePosts.mutate(options);

		invalidatePosts();
	};

	const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());
	const signOut = () => signOutAuth(auth);
</script>

<div class="container">
	<nav>
		<ul>
			<li><strong>Tweeter</strong></li>
		</ul>

		{#if !isSignedIn($user)}
			<ul>
				<a href="/" role="button" class="outline" on:click|preventDefault={signIn}>Sign In</a>
			</ul>
		{:else}
			{@const displayName = $user.displayName}

			<ul>
				<li>
					<details role="list">
						<summary aria-haspopup="listbox" role="link">{displayName}</summary>
						<ul role="listbox">
							<li>
								<a href="/" on:click|preventDefault={signOut}>Sign Out</a>
							</li>
							<li>
								<a
									href="/"
									on:click|preventDefault={() =>
										deletePosts({ username: displayName ?? 'Unknown' })}
								>
									Delete My Posts
								</a>
							</li>
						</ul>
					</details>
				</li>
			</ul>
		{/if}
	</nav>
</div>

<main>
	<div class="container">
		{#if isSignedIn($user)}
			{@const displayName = $user.displayName}

			<form>
				<textarea id="post-content" name="Post Content" cols="30" rows="6" bind:value={text} />
				<small>Write what you are feeling.</small>

				<a
					href="/"
					role="button"
					on:click|preventDefault={(evt) => {
						createPost({ username: displayName ?? 'Unknown', text });
					}}
				>
					Post
				</a>
			</form>
		{/if}

		{#await $timeline}
			<p>Loading...</p>
		{:then posts}
			{#each posts as post}
				<Post {post} />
			{/each}
		{/await}
	</div>
</main>
