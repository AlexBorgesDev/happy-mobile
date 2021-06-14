import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.TouchableOpacity`
  right: 24px;
  bottom: 88px;
  position: absolute;

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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
