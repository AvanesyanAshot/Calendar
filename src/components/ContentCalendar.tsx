import { Badge, Calendar } from "antd";
import { Moment } from "moment";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";

interface ContentCalendarProps {
  events: IEvent[];
}

const ContentCalendar: FC<ContentCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );

    return (
      <>
        {currentDayEvents.map((ev, index) => (
          <Badge key={index} status={ev.type} text={ev.description} />
        ))}
      </>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default ContentCalendar;
