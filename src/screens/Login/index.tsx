import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';

import { Container, styles, SubmitButton, SubmitButtonText } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        mode="outlined"
        label="Senha"
        value={password}
        onChangeText={setPassword}
      />

      <SubmitButton mode="contained" contentStyle={styles.btn}>
        <SubmitButtonText>ENTRAR</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Login;
