import { Header } from "../Header";
import { Box, DataContent, RegisterContent, BoxContent, Conteiner } from "./style";
import { BoxConteiner } from "./style";

export const ProductsPage = () => {
  return (
    <Conteiner>
      <Header/>
      <BoxContent>
      <h1> Produtos </h1>
      <button> Adicionar produto </button>
      </BoxContent>
      <DataContent>
        <Box> <h2> Nome </h2> </Box>
        <Box> <h2> QTD </h2> </Box>
        <Box> <h2> Preço </h2> </Box>
        <Box> <h2> Ações </h2> </Box>
      </DataContent>

      <RegisterContent>
      {
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => (
        <BoxConteiner>
          <Box> <h2> Arroz </h2> </Box>
          <Box> <h2> 20 unid </h2> </Box>
          <Box> <h2> R$13,00 </h2> </Box>
          <Box> <h2> .... </h2> </Box>
        </BoxConteiner>
      ))
    }
    </RegisterContent>
    </Conteiner>
  );
};