import React, { useEffect, useRef, useState } from 'react';

import { TextInput } from 'react-native-paper';
import { TextInput as RNInput } from 'react-native';

// Types
import { RegisterProps } from '../../@types/screenProps';

import {
  Container,
  styles,
  SubmitButton,
  SubmitButtonText,
  SvgLogo,
  TextButton,
} from './styles';

const Register = ({ navigation }: RegisterProps) => {
  const emailRef = useRef<RNInput>(null);
  const passwordRef = useRef<RNInput>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    setLoading(true);

    setTimeout(() => setLoading(false), 2500);
  };

  useEffect(() => {
    setErrors(errs => errs.filter(err => err !== 'name'));
  }, [name]);

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
        label="Nome Completo"
        value={name}
        style={styles.input}
        error={errors.includes('name')}
        disabled={loading}
        blurOnSubmit={false}
        returnKeyType="next"
        autoCapitalize="words"
        textContentType="name"
        autoCompleteType="name"
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current?.focus()}
      />

      <TextInput
        ref={emailRef}
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
        onSubmitEditing={handleRegister}
        right={
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            disabled={loading}
            onPress={() => setShowPassword(value => !value)}
          />
        }
      />

      <SubmitButton
        mode="contained"
        loading={loading}
        disabled={loading}
        contentStyle={styles.btn}
        onPress={handleRegister}>
        <SubmitButtonText>CADASTRAR</SubmitButtonText>
      </SubmitButton>

      <TextButton
        mode="text"
        disabled={loading}
        onPress={() => navigation.navigate('login')}>
        <SubmitButtonText>JÁ TENHO UMA CONTA</SubmitButtonText>
      </TextButton>
    </Container>
  );
};

export default Register;
