import { IEventType } from "../store/reducers/calendar/types";

export interface IEvent {
  author: string;
  guest: string;
  date: string;
  description: string;
  type: IEventType;
}
