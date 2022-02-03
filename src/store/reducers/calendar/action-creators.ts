import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "./../../../models/IUser";
import { AppDispatch } from "./../../index";
import { calendarActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const CalendarActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: calendarActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: calendarActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuest: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(CalendarActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
};
