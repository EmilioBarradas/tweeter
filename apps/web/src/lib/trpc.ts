import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import type { API } from 'api';

export const trpc = createTRPCProxyClient<API>({
	links: [
		httpBatchLink({
			url: process.env.API_ENDPOINT ?? '',
		}),
	],
});
