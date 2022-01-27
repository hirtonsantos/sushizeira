import {
  Container,
  Title,
  BackgroundImg,
  FormBox,
  Form,
  Box1,
  Box1A,
  Box2,
  Error,
  ButtonSignUp,
  ButtonSignIn,
} from "./style";

import Header from "../../components/Header";
import ButtonComponent from "../../components/Button";
import BackgroundImage from "../../assets/sushiBackground.png";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

interface SignUpCredentials {
  name: string;
  email: string;
  address: string;
  password: string;
  confirmPassword?: string;
}

const Signup = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    address: yup.string().required("Endereço obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCredentials>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({
    name,
    email,
    address,
    password,
  }: SignUpCredentials) => {
    console.log({ name, email, address, password });
    api
      .post("/signup", { name, email, address, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Header />
      <Title>Cadastro</Title>
      <BackgroundImg src={BackgroundImage} />
      <FormBox>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Box1>
          <Box1A>

          <TextField
            fullWidth
            id="name"
            required
            label="Nome"
            sx={{
              backgroundColor: "#4F5066",
              borderRadius: "15px",
              fontSize: "2rem",
              padding: "0px",
              "&:hover": {
                backgroundColor: "#4F5066",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                backgroundColor: "#4F5066",
                borderRadius: "15px",
                padding: "0px 5px ",
              },
            }}
            variant="outlined"
            {...register("name")}
            />
          <Error>
            {errors.name?.message && <span>{errors.name?.message}</span>}
          </Error>
            </Box1A>
            <Box1A>

          <TextField
            fullWidth
            id="email"
            required
            label="Email"
            type="email"
            sx={{
              backgroundColor: "#4F5066",
              borderRadius: "15px",
              fontSize: "2rem",
              padding: "0px",
              "&:hover": {
                backgroundColor: "#4F5066",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                backgroundColor: "#4F5066",
                borderRadius: "15px",
                padding: "0px 5px ",
              },
            }}
            variant="outlined"
            {...register("email")}
            />
          <Error>
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </Error>
            </Box1A>
          </Box1>
          <TextField
            fullWidth
            id="address"
            required
            label="Endereço"
            sx={{
              backgroundColor: "#4F5066",
              borderRadius: "15px",
              fontSize: "2rem",
              padding: "0px",
              "&:hover": {
                backgroundColor: "#4F5066",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                backgroundColor: "#4F5066",
                borderRadius: "15px",
                padding: "0px 5px ",
              },
            }}
            variant="outlined"
            {...register("address")}
          />
          <Error>
            {errors.address?.message && <span>{errors.address?.message}</span>}
          </Error>
          <Box2>
          <Box1A>

          <TextField
            fullWidth
            id="password"
            type="password"
            required
            label="Senha"
            sx={{
              backgroundColor: "#4F5066",
              borderRadius: "15px",
              fontSize: "2rem",
              padding: "0px",
              "&:hover": {
                backgroundColor: "#4F5066",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                backgroundColor: "#4F5066",
                borderRadius: "15px",
                padding: "0px 5px ",
              },
            }}
            variant="outlined"
            {...register("password")}
            />
          <Error>
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
              )}
          </Error>
          <TextField
            fullWidth
            id="confirmPassword"
            type="password"
            required
            label="Confirme sua senha"
            sx={{
              backgroundColor: "#4F5066",
              borderRadius: "15px",
              fontSize: "2rem",
              padding: "0px",
              "&:hover": {
                backgroundColor: "#4F5066",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                backgroundColor: "#4F5066",
                borderRadius: "15px",
                padding: "0px 5px ",
              },
            }}
            variant="outlined"
            {...register("confirmPassword")}
            />
          <Error>
            {errors.confirmPassword?.message && (
              <span>{errors.confirmPassword?.message}</span>
              )}
          </Error>
              </Box1A>
              </Box2>
          <ButtonSignUp>

          <ButtonComponent
            type="submit"
            color="true"
            text={"CADASTRAR"}
            
            ></ButtonComponent>
            </ButtonSignUp>
          <ButtonSignIn type="submit" onClick={() => history.push("/")}>
            Entrar
          </ButtonSignIn>
        </Form>
      </FormBox>
    </Container>
  );
};
export default Signup;
