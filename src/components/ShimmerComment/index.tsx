import React, { memo } from 'react';

import themes from '../../themes';

import { Avatar, Caption, Comment, Container, Content } from './styles';

const ShimmerComment = ({ isAnswer }: { isAnswer?: boolean }) => {
  return (
    <Container isAnswer={!!isAnswer}>
      <Avatar isAnswer={!!isAnswer} shimmerColors={themes.get().shimmer} />

      <Content>
        <Comment shimmerColors={themes.get().shimmer} />

        <Caption shimmerColors={themes.get().shimmer} />
      </Content>
    </Container>
  );
};

export default memo(ShimmerComment);
