import { Button, Form, Input, message, Modal } from "antd"
import { useEffect } from "react";
import styledComponents from "styled-components";
import { addUsers } from "../../actions";


const ModalContainer = styledComponents(Modal)`
  background: transparent;
//   width: 60% !important;
  & .ant-modal-body {
    background: #fff;
    border-radius: 14px;
    text-align: right;
  }
  & .ant-modal-content {
    box-shadow: none;
    background: #fff;
    border-radius: 14px;
  }
  & .ant-modal-header {
    border-radius: 14px;
  }
  border-radius: 14px;
`;
const InputBox = styledComponents(Input)`
  background: #efefef;
  border-radius: 14px;
  padding: 12px;
  ::placeholder {
    color: #737373;
  }
`;

const StyledButton = styledComponents(Button)`
    border-radius: 10px;
    color: #fff;
    margin: 10px 12px;
    :hover{
        color: #fff;
    }
`;

const AddUser = ({ showModal, setShowModal, type, user, getUserData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [showModal])

  const onFinish = (values) => {
    addUsers(values,user._id).then(data => {
      console.log(data)
      message.success("Successfully " + type + "ed User")
      setShowModal(false)
      getUserData("")
    }).catch(err => {
      message.error("Couldn't " + type + " User")
    })
  };

  const onCancel = () => {
    setShowModal(false);
  };
  return (
    <ModalContainer title={`${type} User`} visible={showModal} footer={null} onCancel={onCancel}>
      <Form initialValues={user} form={form} onFinish={onFinish} layout="inline" >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input name" }]}
        >
          <InputBox type="text" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input email" }]}
        >
          <InputBox type="email" placeholder="Email" />
        </Form.Item>
      </Form>
      <StyledButton onClick={()=>{
        let values = form.getFieldsValue();
        onFinish(values)
      }} >{type}</StyledButton>
    </ModalContainer>
  )
}

export default AddUser;