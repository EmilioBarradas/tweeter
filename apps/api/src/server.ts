import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { router } from "./routers";

const PORT = 17146;

export const startServer = () => {
	const app = express();

	app.use(cors());
	app.use("/api", createExpressMiddleware({ router }));

	app.listen(PORT, () => console.log(`Started server on port ${PORT}.`));
};
