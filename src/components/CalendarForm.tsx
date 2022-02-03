import { Button, DatePicker, Form, Input, Select } from "antd";
import { Moment } from "moment";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { IEventType } from "../store/reducers/calendar/types";
import { formatDate } from "../utils/date";
import { rules } from "../utils/rules";

interface CalendarFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const CalendarForm: FC<CalendarFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
    type: "default",
  });

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };
  const { user } = useTypedSelector((state) => state.auth);

  const onSubmit = () => {
    props.submit({ ...event, author: user.username });
  };

  return (
    <Form
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[
          rules.required(),
          rules.isDateAfter("You cant create an event in the past "),
        ]}
      >
        <DatePicker onChange={selectDate} />
      </Form.Item>
      <Form.Item label="guest" name="guest" rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map((guest) => (
            <Select.Option value={guest.username} key={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="type" name="type">
        <Select onChange={(type: IEventType) => setEvent({ ...event, type })}>
          <Select.Option value={"default"}>default</Select.Option>
          <Select.Option value={"success"}>success</Select.Option>
          <Select.Option value={"processing"}>processing</Select.Option>
          <Select.Option value={"error"}>error</Select.Option>
          <Select.Option value={"warning"}>warning</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CalendarForm;
