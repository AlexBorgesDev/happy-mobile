import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-top: ${StatusBar.currentHeight}px;

  background-color: ${({ theme }) => theme.bodyBackground};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;
