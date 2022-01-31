import { NativeSelect, InputLabel, TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import { useProduct } from "../../context/Product/ProductContext";

interface Product {
  id?: number;
  name: string;
  category: string;
  price: number;
  img: string;
  description?: string;
  quantityStock: number;
  url?: string;
}

interface PopUpProps {
  setPopup: (value: boolean) => void;
}

function PopUpCreateProduct({setPopup}: PopUpProps) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    price: yup.string().required("Preço obrigatório"),
    img: yup.string().required("URL obrigatória"),
    description: yup.string().required("Descrição Obrigatória"),
    quantityStock: yup.string().required("quantidade de estoque obrigatória"),
  });

  const { createProduct } = useProduct()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: Product) => {
    createProduct(data)
    console.log("cheguei")
  };

  const closePopUp = () => {
    setPopup(false)
  }

  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => closePopUp()}/>
            <h3>Criar Hábito</h3>
            <TextField
              fullWidth
              id="login-basic"
              label="Título"
              variant="outlined"
              error={!!errors.name?.message}
              {...register("name")}
            />
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Descrição"
              variant="outlined"
              error={!!errors.description?.message}
              {...register("description")}
            />
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Url da imagem"
              variant="outlined"
              error={!!errors.img?.message}
              {...register("img")}
            />
            <InputLabel htmlFor="select"> Estoque </InputLabel>
            <NativeSelect
              fullWidth
              id="select"
              {...register("quantityStock")}
              error={!!errors.quantityStock?.message}
            >
              <option>
                10
              </option>
              <option>
                20
              </option>
              <option>
                30
              </option>
            </NativeSelect>
            <InputLabel htmlFor="select"> Preço </InputLabel>
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Descrição"
              variant="outlined"
            />
            <InputLabel htmlFor="select">Selecionar a categoria:</InputLabel>
            <NativeSelect
              fullWidth
              id="select"
              {...register("category")}
              error={!!errors.category?.message}
            >
              <option>
                Alimentação
              </option>
              <option>
                Bebidas
              </option>
            </NativeSelect>
            <Button type="submit" text="Adicionar" />
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpCreateProduct;