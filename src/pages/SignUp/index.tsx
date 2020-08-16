import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/CustomButton';
import FormInput from '../../components/FormInput';

import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

import { Container, SignUpForm, Buttons, RightArrowIcon } from './styles';

interface MyProps {}
interface MyState {
  displayName: string;
  email: string;
  whatsApp: string;
  address: string;
  password: string;
  confirmPassword: string;
}

class SignUp extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      whatsApp: '',
      address: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event: React.FormEvent<HTMLElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    if (name === 'displayName') return this.setState({ displayName: value });
    if (name === 'email') return this.setState({ email: value });
    if (name === 'whatsApp') return this.setState({ whatsApp: value });
    if (name === 'address') return this.setState({ address: value });
    if (name === 'password') return this.setState({ password: value });
    if (name === 'confirmPassword')
      return this.setState({ confirmPassword: value });
  };

  handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const {
      displayName,
      email,
      whatsApp,
      address,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert('Senhas não são iguais');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, whatsApp, address });

      this.setState({
        displayName: '',
        email: '',
        whatsApp: '',
        address: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      displayName,
      email,
      whatsApp,
      address,
      password,
      confirmPassword,
    } = this.state;
    return (
      <Container>
        <SignUpForm>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='displayName'
              type='text'
              label='nome'
              value={displayName}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              name='email'
              type='email'
              label='email'
              value={email}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              name='whatsApp'
              type='text'
              label='whatsapp'
              value={whatsApp}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              name='address'
              type='text'
              label='endereço'
              value={address}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              name='password'
              type='password'
              label='senha'
              value={password}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              name='confirmPassword'
              type='password'
              label='confirmar senha'
              value={confirmPassword}
              handleChange={this.handleChange}
              required
            />

            <Buttons>
              <CustomButton type='submit'>Cadastrar</CustomButton>
            </Buttons>
          </form>

          <span>
            <RightArrowIcon />
            Ja possui uma conta?&nbsp;
            <Link to='/logar'> Clique aqui para acessar!</Link>
          </span>
        </SignUpForm>
      </Container>
    );
  }
}

export default SignUp;
