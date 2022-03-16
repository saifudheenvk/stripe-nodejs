import { Col, Layout, Row } from "antd";
import { Content as AntdContent } from "antd/lib/layout/layout";
import img from "../../assets/background.svg";
import styled from "styled-components";
import Header from "../Header.jsx/index.jsx";
import { getUsers } from "../../actions";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import defaultImage from "../../assets/user.svg";
import AddUser from "./AddUserModal";


const ContainerLayout = styled(Layout)`

&& {
  height: 100vh;
}
background-image: url(${(props) => props.url});
& ::-webkit-scrollbar {
  background-color: #ffff;
  width: 6px;
  height: 6px;
  -webkit-border-radius: 1ex;
}
& ::-webkit-scrollbar-thumb {
  background-color: #9d6deb;
  -webkit-border-radius: 1ex;
}
`;

const Container = styled(AntdContent)`
  padding: 15px 18px;
  overflow-y: auto;
  margin-top: 28px;
  height: auto;
  margin-left: 30px;
  margin-right: 30px;
`;


const StyledCol = styled(Col)`
  padding-right: 10px;
  padding-left: 10px;
`;

const Dashboard = () => {

    const [data, setData] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [uType,setUType] = useState("Add")
    const [selectedUser,setSelectedUser] = useState({})

    const getUserData = (value) => {
        getUsers(value).then(d => {
            setData(d)
        })
    }

    useEffect(() => {
        getUserData("")
    }, [])


    return (
        <ContainerLayout url={img}>
            <Header />
            <AddUser getUserData={getUserData} user={selectedUser} showModal={showModal} setShowModal={setShowModal} type={uType} />
            <Container>
                <Row>
                    {data && data.map(d => {
                        return <StyledCol key={d._id} onClick={()=>{
                            setUType("Update");
                            setSelectedUser(d)
                            setShowModal(true)
                        }} xl={4} lg={5} xxl={4} ><UserCard user={d} isPlus={false} image={defaultImage} /></StyledCol>
                    })}
                    <StyledCol key="adduser" onClick={()=>{
                        setUType("Add");
                        setSelectedUser({})
                        setShowModal(true)
                    }} xl={4} lg={5} xxl={4} ><UserCard isPlus={true} /></StyledCol>
                </Row>
            </Container>
        </ContainerLayout>
    )
}

export default Dashboard;