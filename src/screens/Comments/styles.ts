import styled from 'styled-components/native';

import { Button } from 'react-native-paper';
import { FlatList } from 'react-native';

import { CommentType } from '../../@types/types';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const Content = styled(FlatList as new () => FlatList<CommentType>)`
  flex: 1;
`;

export const FinishedText = styled.Text`
  margin-top: 24px;

  color: ${({ theme }) => theme.captionColor};
  font-size: 14px;
  text-align: center;
  font-family: 'Inter-Medium';
`;

export const FinishedButton = styled(Button)`
  margin-top: 8px;
  margin-bottom: 32px;

  align-self: center;
`;
