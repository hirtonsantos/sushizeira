import { Conteiner } from "../ProductsPage/style";
import { Header } from "../Header";
import { Box, BoxConteiner, Content, DataContent, RegisterContent } from "./style";

export const HistoricPage = () => {
    return (
      <Conteiner>
      <Header/>
      <h1> Histórico </h1>
        <Content>
        <DataContent>
          <Box> <h2> ID </h2> </Box>
          <Box> <h2> Cliente </h2> </Box>
          <Box> <h2> Tempo </h2> </Box>
          <Box> <h2> Status </h2> </Box>
          <Box> <h2> Total </h2> </Box>
        </DataContent>
        
        <RegisterContent>
      {
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => (
        <BoxConteiner>
          <Box> <h2> # 123456 </h2> </Box>
          <Box> <h2> Brooklyn Zoe </h2> </Box>
          <Box> <h2> 13 min </h2> </Box>
          <Box> <h2> Pendente </h2> </Box>
          <Box> <h2> R$ 13,00 </h2> </Box>
        </BoxConteiner>
      ))
    }
    </RegisterContent>

      </Content>
      </Conteiner>
    )
}