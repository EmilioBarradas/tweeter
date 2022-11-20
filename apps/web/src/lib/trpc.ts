import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import type { API } from 'api';
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

export const trpc = createTRPCProxyClient<API>({
	links: [
		httpBatchLink({
			url: PUBLIC_API_ENDPOINT ?? '',
		}),
	],
});
