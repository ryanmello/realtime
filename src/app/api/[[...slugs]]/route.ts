import { Elysia } from "elysia";

const rooms = new Elysia({ prefix: "/room" }).post("/create", () => {
  console.log("create a new room");
});

const app = new Elysia({ prefix: "/api" }).use(rooms);

export type App = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;
