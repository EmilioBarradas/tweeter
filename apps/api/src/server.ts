import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { router } from "./routers";

export const startServer = () => {
	const app = express();

	app.use(cors());
	app.use("/api", createExpressMiddleware({ router }));

	app.listen(Number(process.env.PORT ?? 3000), "0.0.0.0", () =>
		console.log(`Started server on port 8080.`)
	);
};
