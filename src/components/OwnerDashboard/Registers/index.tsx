// import { RegisterKey } from "../RegisterKey";
import { RegisterKey } from "../RegisterKey";
import { Box, Container, DataContent, RegisterContent } from "./style";

export const Register = () => {
  return (
    <Container>
      <DataContent>
        {/* <Box> <h2> ID </h2> </Box> */}
        <Box> <h2> Cliente </h2> </Box>
        <Box> <h2> Status </h2> </Box>
        <Box> <h2> Total </h2> </Box>
        <Box> <h2> Ações </h2> </Box>
      </DataContent>
      
      <RegisterContent>
        <RegisterKey/>
        <RegisterKey/>
        <RegisterKey/>
      </RegisterContent>
    </Container>
  );
};
