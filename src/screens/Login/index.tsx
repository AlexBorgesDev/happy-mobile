import React, { useEffect, useRef, useState } from 'react';

import { TextInput as RNInput } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

// Types
import { LoginProps } from '../../@types/screenProps';

// Services
import loginService from '../../services/login.service';

import {
  Container,
  styles,
  SubmitButton,
  SubmitButtonText,
  SvgLogo,
  TextButton,
} from './styles';

const Login = ({ navigation }: LoginProps) => {
  const passwordRef = useRef<RNInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    await loginService(email, password, setErrors);

    setLoading(false);
  };

  useEffect(() => {
    setErrors(errs => errs.filter(err => err !== 'email'));
  }, [email]);

  useEffect(() => {
    setErrors(errs => errs.filter(err => err !== 'password'));
  }, [password]);

  return (
    <Container>
      <SvgLogo />

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        style={styles.input}
        error={errors.includes('email')}
        disabled={loading}
        blurOnSubmit={false}
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        textContentType="emailAddress"
        autoCompleteType="email"
        onChangeText={setEmail}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />

      <TextInput
        ref={passwordRef}
        mode="outlined"
        label="Senha"
        value={password}
        error={errors.includes('password')}
        disabled={loading}
        returnKeyType="done"
        autoCapitalize="none"
        secureTextEntry={!showPassword}
        textContentType="password"
        autoCompleteType="password"
        onChangeText={setPassword}
        onSubmitEditing={handleLogin}
        right={
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            disabled={loading}
            onPress={() => setShowPassword(value => !value)}
          />
        }
      />
      <HelperText type="info" visible onPress={() => {}}>
        Esqueci minha senha
      </HelperText>

      <SubmitButton
        mode="contained"
        loading={loading}
        disabled={loading}
        contentStyle={styles.btn}
        onPress={handleLogin}>
        <SubmitButtonText>ENTRAR</SubmitButtonText>
      </SubmitButton>

      <TextButton
        mode="text"
        disabled={loading}
        onPress={() => navigation.navigate('register')}>
        <SubmitButtonText>NÂO TENHO UMA CONTA</SubmitButtonText>
      </TextButton>
    </Container>
  );
};

export default Login;
