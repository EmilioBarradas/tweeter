<script lang="ts">
	import type { Post } from 'api';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let post: Post;
</script>

<div>
	<div class="apart">
		<span><strong>{post.username}</strong></span>
		<span>{dayjs(post.createdAt).fromNow()}</span>
	</div>

	<p>{post.text}</p>
</div>

<style>
	.apart {
		display: flex;
		justify-content: space-between;
	}
</style>
