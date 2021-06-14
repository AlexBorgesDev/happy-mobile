import styled from 'styled-components/native';

import { PostType } from '../../@types/types';

import { Button } from 'react-native-paper';
import { FlatList, StatusBar, StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-top: ${StatusBar.currentHeight}px;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const Content = styled(FlatList as new () => FlatList<PostType>)`
  flex: 1;
`;

export const FinishedPostText = styled.Text`
  margin-top: 24px;

  color: ${({ theme }) => theme.captionColor};
  font-size: 14px;
  text-align: center;
  font-family: 'Inter-Medium';
`;

export const FinishedPostButton = styled(Button)`
  margin-top: 8px;
  margin-bottom: 32px;

  align-self: center;
`;

export const styles = StyleSheet.create({
  modal: {
    padding: 20,
  },
});
