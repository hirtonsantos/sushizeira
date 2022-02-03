import {
  Container,
  ContainerLogin,
  Title,
  BackgroundImg,
  FormBox,
  Form,
  Error,
  ButtonSignIn,
  ButtonSignUp,
} from './style'
import { TextField } from '@mui/material'

import Header from '../../components/Header'
import ButtonComponent from '../../components/Button'
import BackgroundImage from '../../assets/sushiBackground.png'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/Auth/AuthContext'

interface SignInCredentials {
  email: string
  password: string
}

const Login = () => {
  const history = useHistory()
  const { signIn } = useAuth()

  const formSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: yupResolver(formSchema),
  })

  const onSubmitFunction = (data: SignInCredentials) => {
    signIn(data)
  }

  return (
    <Container>
      <div className='styleHeader'>
        <Header />
      </div>
      <ContainerLogin>
        <Title>Login</Title>
        <BackgroundImg src={BackgroundImage} />
        <FormBox>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <TextField
              fullWidth
              required
              type='email'
              label='Email'
              id='email'
              sx={{
                backgroundColor: '#4F5066',
                borderRadius: '15px',
                fontSize: '2rem',
                padding: '0px',
                '&:hover': {
                  backgroundColor: '#4F5066',
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                  backgroundColor: '#4F5066',
                  borderRadius: '5px',
                  padding: '0px 5px ',
                },
              }}
              variant='outlined'
              {...register('email')}
            />
            <Error>
              {errors.email?.message && <span>{errors.email?.message}</span>}
            </Error>
            <TextField
              fullWidth
              required
              type='password'
              label='Senha'
              id='password'
              sx={{
                backgroundColor: '#4F5066',
                borderRadius: '15px',
                fontSize: '2rem',
                '&:hover': {
                  backgroundColor: '#4F5066',
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'white',
                  backgroundColor: '#4F5066',
                  borderRadius: '5px',
                  padding: '0px 5px ',
                },
              }}
              variant='outlined'
              {...register('password')}
            />
            <Error>
              {errors.email?.message && <span>{errors.password?.message}</span>}
            </Error>

            <ButtonSignIn>
              <ButtonComponent text={'Entrar'} color='true'></ButtonComponent>
            </ButtonSignIn>

            <ButtonSignUp type='submit' onClick={() => history.push('/signup')}>
              Cadastre-se
            </ButtonSignUp>
          </Form>
        </FormBox>
      </ContainerLogin>
    </Container>
  )
}
export default Login
