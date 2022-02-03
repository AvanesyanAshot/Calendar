import { Calendar } from "antd";
import React, { FC } from "react";
import { ICalendar } from "../models/ICalendar";

interface ContentCalendarProps {
  event: ICalendar[];
}

const ContentCalendar: FC<ContentCalendarProps> = () => {
  return <Calendar />;
};

export default ContentCalendar;
