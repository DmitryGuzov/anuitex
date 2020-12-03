import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import React, { useCallback } from "react";
import * as Yup from "yup";
import "./ExampleForm.scss";

export interface ExampleModel {
  email: string;
  password: string;
}

interface ExamplePageProps {
  value: ExampleModel;
  loading: boolean;
  onChange: (exampleModel: ExampleModel) => void;
}

const exampleValidationSchema = Yup.object<ExampleModel>({
  email: Yup.string().required(),
  password: Yup.string().required()
});

export function ExampleForm({ value, onChange, loading }: ExamplePageProps): JSX.Element {

  const handleSubmit = useCallback((exampleModel: ExampleModel) => {
    onChange(exampleModel);
  }, [onChange]);

  return (
    <Formik
      initialValues={value}
      onSubmit={handleSubmit}
      validationSchema={exampleValidationSchema}
    >
      <Form className='form'>
        <h2>(Sign Up | Sign In) form</h2>
        <Form.Item name="email" label="Email">
          <Input name="email" type="email"></Input>
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input name="password" type="password"></Input>
        </Form.Item>
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          disabled={loading}
          icon={<SendOutlined />}
          size="large"
        >
          Sign In
        </Button>
      </Form>
    </Formik>
  );
}
