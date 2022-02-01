import { Box, BoxUser, Container, ContainerBox, ContainerConfig, Content, ContentCategory, ContentConfig } from "./style"
import Logo from "../../assets/dashboardOwner/Logo.svg"
import { TiThMenu } from "react-icons/ti"
import UserAvatar from "../../assets/dashboardOwner/User-Avatar.svg"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useOwner } from "../../context/Owner/ownerContext"
import { useAuth } from "../../context/Auth/AuthContext"

interface HeaderProps {
    openMenu?: boolean;
}

export const Header = ({openMenu}: HeaderProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { showIsOn } = useOwner()
    const {signOut} = useAuth();

    const OpenMenu = () => {
        setIsOpen(!isOpen)
        showIsOn()
    }

    const history = useHistory()

    return (
        <Container>

        <ContainerBox>
        <figure>
            <img src={Logo} alt="Logo"/>
        </figure>
        <Content>
        <h1 onClick={() => history.push("/requestPage")}> Pedidos </h1>
        <h1 onClick={() => history.push("/products")}> Produtos </h1>
        <h1 onClick={() => history.push("/historic")}> Histórico </h1>
        </Content>
        <ContentConfig>
            <span> Ola, Adm </span>
            <p onClick={()=> signOut()}> Sair </p>
        </ContentConfig>
        <TiThMenu onClick={() => OpenMenu()}/>
        </ContainerBox>

        <ContainerConfig openMenu={isOpen}>
            <BoxUser>
                <img src={UserAvatar} alt="User-Avatar"/>
                <h2>Brooklyn Zoe</h2>
            </BoxUser>
        
            <ContentCategory>
            <Box onClick={() => history.push("/requestPage")}><h2>Pedidos</h2></Box>
            <Box onClick={() => history.push("/products")}><h2>Produtos</h2></Box>
            <Box onClick={() => history.push("/historic")}><h2>Histórico</h2></Box>
            </ContentCategory>
        
        </ContainerConfig>

        </Container>
    )
}