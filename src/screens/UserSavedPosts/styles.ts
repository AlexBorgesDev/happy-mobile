import styled from 'styled-components/native';

import { Button } from 'react-native-paper';
import { FlatList } from 'react-native';

// Types
import { PostType } from '../../@types/types';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const Content = styled(FlatList as new () => FlatList<PostType>)`
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
