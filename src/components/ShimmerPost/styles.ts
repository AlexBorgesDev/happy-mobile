import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const Container = styled.View`
  width: 100%;
`;

export const AuthorContainer = styled.View`
  padding: 14px 16px;

  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled(ShimmerPlaceHolder)`
  width: 40px;
  height: 40px;
  border-radius: 80px;
`;

export const AuthorContent = styled.View`
  flex: 1;
  margin-left: 8px;
  flex-direction: column;
`;

export const AuthorName = styled(ShimmerPlaceHolder)`
  width: 50%;

  height: 14px;
  border-radius: 2.5px;
`;

export const PostData = styled(ShimmerPlaceHolder)`
  width: 20%;
  margin-top: 2.5px;

  height: 11px;
  border-radius: 2.5px;
`;

export const TitleContainer = styled.View`
  padding: 0 16px 14px;
`;

export const Title = styled(ShimmerPlaceHolder)`
  width: 50%;
  height: 15px;

  border-radius: 2.5px;
`;
