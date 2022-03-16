import styled from "styled-components";
import { Header as AntdHeader } from "antd/lib/layout/layout";
import { Row, Col } from "antd";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { makePayments } from "../../actions";

const Container = styled(AntdHeader)`
  width: 100%;
  display: flex !important;
  align-items: center !important;
  flex-direction: column;
  padding: 0px 10px;
  background: #ffffff !important;
  &.ant-layout-header {
    height: auto;
  }
`;

const HeaderContainer = styled(Row)`
  width: 100%;
  height: 55px;
  &.ant-row {
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 55px;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 200px;
  cursor: pointer;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 45px;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 200px;
  cursor: pointer;
`;

const NavbarLogo = styled.img`
  height: 43px;
  margin: auto;
`;

const Badge = styled.p`
  margin-bottom: 0px;
  text-align: center;
  border-radius: 13px;
  padding: 4px;
  font-weight:bold;
  color:#9D6DEB;
`;

const Header = () => {

  const [product, setProduct] = useState({
    price: 3,
  })

  const makePayment = token => {
    const body = {
      token,
      subscription: product
    }
    makePayments(body).then(data=>{
      console.log(data)
    })
  }

  return (
    <Container>
      <HeaderContainer>
        <Col span={4}>
          <LogoContainer>
            <NavbarLogo src={Logo} />
          </LogoContainer>
        </Col>
        <Col span={18}></Col>
        <Col span={2}>
          <SubContainer>
            <StripeCheckout currency="INR" stripeKey="pk_test_51KdoCzSA5gxdKnIvXBCgI1p2MNTSAvO9ExQEWk5IL1eRl5f86JVvwG1S9fO9XlnQNL8jheZzgme0bGbUJoALgP7i00P44EfigC" token={makePayment} name="Saifu Product" amount={300} ><Badge >Subscribe</Badge></StripeCheckout>
          </SubContainer>
        </Col>
      </HeaderContainer>
    </Container>
  );
};

export default Header;