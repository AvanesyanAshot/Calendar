import { Button, Layout, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC, useEffect } from "react";
import CalendarForm from "../components/CalendarForm";
import ContentCalendar from "../components/ContentCalendar";
import { useActions } from "../hooks/useActions";
import useToggle from "../hooks/useToggle";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Content: FC = () => {
  const [toggle, { onToggle, offToggle }] = useToggle();
  const { fetchGuest } = useActions();
  const { guests } = useTypedSelector((state) => state.calendar);
  useEffect(() => {
    fetchGuest();
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
        <CalendarForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Content;
