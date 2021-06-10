import styled from 'styled-components/native';

import { Button } from 'react-native-paper';
import { StatusBar, StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding: ${StatusBar.currentHeight}px 16px 0;

  justify-content: center;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const SubmitButton = styled(Button)`
  margin-top: 24px;
  height: 48px;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Inter-Bold';
`;

export const styles = StyleSheet.create({
  btn: {
    height: '100%',
  },
});
