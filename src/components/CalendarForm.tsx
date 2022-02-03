import { Input, Form, Button, DatePicker, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";

const CalendarForm: FC = () => {
  const onSubmit = () => {
    console.log("bruh");
  };
  const { isLoading } = useTypedSelector((state) => state.auth);
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
        <Input />
      </Form.Item>
      <Form.Item label="Date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="" name="date" rules={[rules.required()]}>
        <Select>
          <Option value="jack"></Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CalendarForm;
