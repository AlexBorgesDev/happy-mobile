import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;

export const AvatarButton = styled(TouchableOpacity)`
  margin: 16px 0px;
  align-self: center;
`;

export const Input = styled(TextInput)`
  margin: 8px 0;
`;

export const SubmitButton = styled(Button)`
  height: 48px;
  margin-top: 24px;
  border-radius: 0;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Inter-Bold';
`;

export const styles = StyleSheet.create({
  btn: {
    height: '100%',
  },
});
