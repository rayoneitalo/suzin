import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase-utils';

import { Container, SignInForm, Buttons, RightArrowIcon } from './styles';

interface MyProps {}

interface MyState {
  email: string;
  password: string;
}

class SignIn extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  // Save the changes on "email" and "password" and save to setState
  handleChange = (event: React.FormEvent<HTMLElement>) => {
    const { value, name } = event.target as HTMLInputElement;

    name === 'email'
      ? this.setState({ email: value })
      : this.setState({ password: value });
  };

  // Save data to firebase
  handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    console.log('Handle submit!');
  };

  render() {
    return (
      <Container>
        <SignInForm>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              label='email'
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              name='password'
              type='password'
              label='senha'
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />

            <Buttons>
              <CustomButton type='submit'>Logar com seu Email</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Logar com o Google
              </CustomButton>
            </Buttons>
          </form>

          <span>
            <RightArrowIcon />
            Não possui uma conta?&nbsp;
            <Link to='/cadastrar'> Clique aqui para criar uma!</Link>
          </span>
        </SignInForm>
      </Container>
    );
  }
}

export default SignIn;
