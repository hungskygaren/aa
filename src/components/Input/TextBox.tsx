import { Form, Input } from "antd";

const TextBox = ({ label, type, classname, classnameFI, placeholder }) => {
  return (
    <Form.Item
      // wrapperCol={ }
      // labelCol={}
      // labelAlign={}
      // colon={}
      label={label}
      // rules={}
      // required={}
      className={classnameFI}
    >
      {type === "password" ? (
        <Input.Password
          className={classname}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <Input
          // min={}
          // max={}
          // name={}
          className={classname}
          type={type}
          // value={}
          // onChange={}
          placeholder={placeholder}
        />
      )}
    </Form.Item>
  );
};

export default TextBox;
