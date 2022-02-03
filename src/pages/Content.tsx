import { Button, Layout, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC } from "react";
import CalendarForm from "../components/CalendarForm";
import ContentCalendar from "../components/ContentCalendar";
import useToggle from "../hooks/useToggle";

const Content: FC = () => {
  const [toggle, { onToggle, offToggle }] = useToggle();
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
        <CalendarForm />
      </Modal>
    </Layout>
  );
};

export default Content;
