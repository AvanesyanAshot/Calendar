import { AuthActionCreators } from "./auth/action-creators";
import { CalendarActionCreators } from "./calendar/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...CalendarActionCreators,
};
