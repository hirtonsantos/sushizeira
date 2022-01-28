import { Box, BoxUser, Container, ContainerBox, ContainerConfig, Content, ContentCategory, ContentConfig } from "./style"
import Logo from "../../../assets/Logo.svg"
import { TiThMenu } from "react-icons/ti"
import UserAvatar from "../../../assets/User-Avatar.svg"
import { useState } from "react"
import { useHistory } from "react-router-dom"

interface HeaderProps {
    openMenu?: boolean;
}

export const Header = ({openMenu}: HeaderProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const OpenMenu = () => {
        setIsOpen(!isOpen)
    }

    const history = useHistory()

    return (
        <Container>

        <ContainerBox>
        <figure>
            <img src={Logo} alt="Logo"/>
        </figure>
        <Content>
        <h1 onClick={() => history.push("/")}> Pedidos </h1>
        <h1 onClick={() => history.push("/products")}> Produtos </h1>
        <h1 onClick={() => history.push("/historic")}> Histórico </h1>
        </Content>
        <ContentConfig>
            <span> Ola, Adm </span>
            <p> Sair </p>
        </ContentConfig>
        <TiThMenu onClick={() => OpenMenu()}/>
        </ContainerBox>

        <ContainerConfig openMenu={isOpen}>
            <BoxUser>
                <img src={UserAvatar} alt="User-Avatar"/>
                <h2>Brooklyn Zoe</h2>
            </BoxUser>
        
            <ContentCategory>
            <Box onClick={() => history.push("/")}><h2>Pedidos</h2></Box>
            <Box onClick={() => history.push("/products")}><h2>Produtos</h2></Box>
            <Box onClick={() => history.push("/historic")}><h2>Histórico</h2></Box>
            </ContentCategory>
        
        </ContainerConfig>

        </Container>
    )
}