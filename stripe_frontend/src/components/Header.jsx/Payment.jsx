import { Button, Modal } from "antd"
import styledComponents from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";


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

const Badge = styledComponents.p`
  margin-bottom: 0px;
  text-align: center;
  border-radius: 13px;
  padding: 4px;
  border: 1px solid #9D6DEB;
  font-weight:bold;
  color:#9D6DEB;
`;

const Payment = ({ showModal, setShowModal }) => {
  const onCancel = () => {
    setShowModal(false);
  };
  const [product,setProduct] = useState({})

  return (
    <ModalContainer title="Subscribe" visible={showModal} footer={null} onCancel={onCancel}>
      <StripeCheckout stripeKey="" token="" name="" ><Badge >Subscribe</Badge></StripeCheckout>
    </ModalContainer>
  )
}

export default Payment;