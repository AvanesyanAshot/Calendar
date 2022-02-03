import { Button, Layout, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC, useEffect } from "react";
import CalendarForm from "../components/CalendarForm";
import ContentCalendar from "../components/ContentCalendar";
import { useActions } from "../hooks/useActions";
import useToggle from "../hooks/useToggle";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Content: FC = () => {
  const [toggle, { onToggle, offToggle }] = useToggle();
  const { fetchGuest, createEvent, fetchEvent } = useActions();
  const { user } = useTypedSelector((state) => state.auth);

  const { guests } = useTypedSelector((state) => state.calendar);
  const addNewEvent = (event: IEvent) => {
    offToggle();
    createEvent(event);
  };
  useEffect(() => {
    fetchGuest();
    fetchEvent(user.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ContentCalendar event={[]} />
      <Row justify="center">
        <Button onClick={onToggle}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        visible={toggle}
        footer={null}
        onCancel={offToggle}
      >
        <CalendarForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Content;
