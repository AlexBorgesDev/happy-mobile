import React, { useEffect, useRef, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInput as RNInput } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

// Types
import { LoginProps } from '../../@types/screenProps';

// Actions
import snackActions from '../../store/actions/snack.actions';
import sessionActions from '../../store/actions/session.actions';

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

    try {
      const res = await loginService({ email, password }, setErrors);

      if (!res?.data || !res?.token) return setLoading(false);

      setLoading(false);
      sessionActions.setUser(res.data);
      await AsyncStorage.setItem('session_user', JSON.stringify(res.data));

      sessionActions.setToken(res.token);
      await AsyncStorage.setItem('session_token', res.token);

      sessionActions.setType('logged');
    } catch (err: any) {
      if (err.response.status === 400 && err.response.data.errors) {
        setErrors(Object.keys(err.response.data.errors));
      } else if (err.response.status === 401) setErrors(['password']);
      else snackActions.setMessage('Algo deu errado ao tentar fazer login');

      setLoading(false);
    }
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
      {/* <HelperText type="info" visible onPress={() => {}}>
        Esqueci minha senha
      </HelperText> */}

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
