import { Conteiner } from "../../../pages/OwnerDashboard/style";
import { Header } from "../Header";
import { Box, BoxConteiner, DataContent, RegisterContent } from "./style";
import { BoxInfo, BoxStatics, ContentSearch, ContentStatics } from "./style";

export const RequestsPage = () => {
  return (
    <Conteiner>
      <Header/>
      <h1> Pedidos </h1>

      <BoxInfo>
        <ContentSearch>
          <label>Buscar por nome: </label>
          <input 
          placeholder="Buscar por nome"
          />
        </ContentSearch>

        <ContentStatics>
          <BoxStatics>
            <h2> 47 </h2>
            <span> Pedidos </span>
          </BoxStatics>
          <BoxStatics>
            <h2> 21 </h2>
            <span> Pendentes </span>
          </BoxStatics>
          <BoxStatics>
            <h2> 26 </h2>
            <span> Enviados </span>
          </BoxStatics>
        </ContentStatics>
      </BoxInfo>

      <DataContent>
        <Box> <h2> ID </h2> </Box>
        <Box> <h2> Cliente </h2> </Box>
        <Box> <h2> Status </h2> </Box>
        <Box> <h2> Total </h2> </Box>
        <Box> <h2> Ações </h2> </Box>
      </DataContent>
      <RegisterContent>
      {
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => (
        <BoxConteiner>
          <Box><h2> # 123456</h2></Box>
          <Box> <h2> Brooklyn </h2> </Box>
          <Box> <h2> Pendente </h2> </Box>
          <Box> <h2> R$13,00 </h2> </Box>
          <Box> <h2> .... </h2> </Box>
        </BoxConteiner>
      ))
    }
    </RegisterContent>
    </Conteiner>
  );
};
