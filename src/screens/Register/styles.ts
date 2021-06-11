import styled from 'styled-components/native';

import { Button } from 'react-native-paper';
import { StatusBar, StyleSheet } from 'react-native';

import Logo from '../../assets/Logo';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding: ${StatusBar.currentHeight}px 16px 0;

  justify-content: center;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const SvgLogo = styled(Logo)`
  align-self: center;
  margin-bottom: 72px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 24px;
  height: 48px;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Inter-Bold';
`;

export const TextButton = styled(Button)`
  margin-top: 32px;
  align-self: center;
`;

export const styles = StyleSheet.create({
  btn: {
    height: '100%',
  },

  input: {
    marginBottom: 8,
  },
});
