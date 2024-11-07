import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

export const unAuthenticatedAction = createSafeActionClient({
  handleServerError: (e) => {
    console.error(e.message);

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});
