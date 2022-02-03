import { Calendar } from "antd";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";

interface ContentCalendarProps {
  event: IEvent[];
}

const ContentCalendar: FC<ContentCalendarProps> = () => {
  return <Calendar />;
};

export default ContentCalendar;
