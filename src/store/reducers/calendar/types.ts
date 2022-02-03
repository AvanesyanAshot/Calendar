import { IEvent } from "./../../../models/IEvent";
import { IUser } from "./../../../models/IUser";

export interface CalendarState {
  guests: IUser[];
  events: IEvent[];
}

export enum calendarActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestsAction {
  type: calendarActionEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: calendarActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type CalendarAction = SetGuestsAction | SetEventsAction;
