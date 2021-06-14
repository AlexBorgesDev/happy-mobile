import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 56px;
  height: 56px;

  right: 16px;
  bottom: 16px;
  position: absolute;

  align-items: center;
  justify-content: center;

  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary};
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
