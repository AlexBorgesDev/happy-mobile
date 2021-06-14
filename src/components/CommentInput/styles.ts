import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.inverseColor};
`;

export const ReplyActionsContainer = styled.View`
  padding: 12px 16px 8px 16px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReplyText = styled.Text`
  color: ${({ theme }) => theme.captionColor};
  font-size: 12px;
  font-family: 'Inter-Medium';
`;

export const ReplyActionButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const ReplyContentText = styled.Text`
  padding: 0 16px 8px 16px;

  color: ${({ theme }) => theme.color};
  font-size: 13px;
  font-family: 'Inter-Regular';
`;

export const InputContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 0 16px;

  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-family: 'Inter-Regular';
`;

export const SubmitButton = styled(TouchableOpacity)`
  margin-right: 16px;

  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
