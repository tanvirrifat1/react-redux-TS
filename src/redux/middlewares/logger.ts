import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("current state", store.getState());
  console.log("action state", action);
  next(action);
  console.log("updated state", store.getState());
};
