import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import type { API } from 'api';
import { env } from '$env/dynamic/public';

export const trpc = createTRPCProxyClient<API>({
	links: [
		httpBatchLink({
			url: env.LOCAL_API_ENDPOINT ?? env.PUBLIC_API_ENDPOINT ?? '',
		}),
	],
});
