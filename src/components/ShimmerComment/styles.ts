import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const Container = styled.View<{ isAnswer?: boolean }>`
  width: 100%;
  padding: ${({ isAnswer }) => (isAnswer ? '4px 16px 4px 0px' : '12px 16px')};
  margin-top: ${({ isAnswer }) => (isAnswer ? '16px' : '0px')};
  margin-bottom: ${({ isAnswer }) => (isAnswer ? '0px' : '8px')};
  flex-direction: row;
`;

export const Avatar = styled(ShimmerPlaceHolder)<{ isAnswer?: boolean }>`
  width: ${({ isAnswer }) => (isAnswer ? '32px' : '48px')};
  height: ${({ isAnswer }) => (isAnswer ? '32px' : '48px')};
  border-radius: 80px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 16px;

  flex-direction: column;
  justify-content: center;
`;

export const Comment = styled(ShimmerPlaceHolder)`
  width: 50%;
  height: 14px;
  border-radius: 2.5px;
`;

export const Caption = styled(ShimmerPlaceHolder)`
  width: 50px;
  height: 12px;

  margin-top: 2.5px;
  border-radius: 2.5px;
`;
