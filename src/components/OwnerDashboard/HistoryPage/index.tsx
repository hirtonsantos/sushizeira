import { Conteiner } from "../ProductsPage/style";
import { Header } from "../Header";
import {
  Box,
  BoxConteiner,
  BoxNotHistoric,
  Content,
  DataContent,
  RegisterContent,
} from "./style";
import { useOwner } from "../../../context/Owner/ownerContext";

export const HistoricPage = () => {
  
  const { request, isShow } = useOwner();

  return (
   
    <Conteiner ishow={isShow}>
      <Header />

      <h1> Histórico </h1>
      {request.length !== 5 ? (
      <Content ishow={isShow}>
        <DataContent>
          <Box>
            <h2> ID </h2>
          </Box>
          <Box>
            <h2> Cliente </h2>
          </Box>
          <Box>
            <h2> Tempo </h2>
          </Box>
          <Box>
            <h2> Status </h2>
          </Box>
          <Box>
            <h2> Total </h2>
          </Box>
        </DataContent>

        <RegisterContent>
          {request.map((item, index) => {
            let timeTotal = request[index].details.reduce((acc, curr) => {
              return acc + curr.timeToCook;
            }, 0);
            if (isNaN(timeTotal)){
              timeTotal = 0
            }
            return (
              <BoxConteiner>
                <Box>
                  <h2> {item.id} </h2>
                </Box>
                <Box>
                  <h2> {item.costumer} </h2>
                </Box>
                <Box>
                  <h2> {timeTotal} min </h2>
                </Box>
                <Box>
                  <h2> {item.status} </h2>
                </Box>
                <Box>
                  <h2> {item.price} </h2>
                </Box>
              </BoxConteiner>
            );
          })}
        </RegisterContent>
      </Content>
      )
      : (
        <BoxNotHistoric ishow={isShow}>
        <h1> Hum... Sem nenhum histórico por aqui </h1>
        <span> Que tal fazer uma promoção? </span>
        <img src="data:image/jpeg;base64,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" alt="img"/>
      </BoxNotHistoric>
      )}
    </Conteiner>
     
  );
};
