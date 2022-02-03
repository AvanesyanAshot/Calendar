import { CalendarAction, calendarActionEnum, CalendarState } from "./types";
const initialState: CalendarState = {
  events: [],
  guests: [],
};

export default function authReducer(
  state = initialState,
  action: CalendarAction
): CalendarState {
  switch (action.type) {
    case calendarActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    case calendarActionEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
}
