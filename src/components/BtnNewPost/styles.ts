import styled from 'styled-components/native';

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
