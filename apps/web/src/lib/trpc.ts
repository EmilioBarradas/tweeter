import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import type { API } from 'api/src/routers';

export const trpc = createTRPCProxyClient<API>({
	links: [
		httpBatchLink({
			url: 'http://localhost:17146/api',
		}),
	],
});
