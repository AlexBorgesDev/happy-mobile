import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 12px 16px;

  flex-direction: row;
`;

export const AnswerContainer = styled.View`
  width: 100%;

  padding: 4px 16px 4px 0px;
  margin-top: 16px;

  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 12px;

  flex-direction: column;
`;

export const ContentText = styled.Text`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-family: 'Inter-Medium';
`;

export const ActionsContainer = styled.View`
  margin-top: 2.5px;

  align-items: center;
  flex-direction: row;
`;

export const ActionButton = styled(TouchableOpacity)`
  margin: 0 12px;
`;

export const Caption = styled.Text`
  color: ${({ theme }) => theme.captionColor};
  font-size: 12px;
  font-family: 'Inter-Regular';
`;

export const SeeAnswersButton = styled(TouchableOpacity)`
  margin-top: 8px;

  align-items: center;
  flex-direction: row;
`;

export const Line = styled.View`
  width: 16px;
  height: 1px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.gray};
`;
