import React, { memo } from 'react';

import {
  AuthorContainer,
  AuthorContent,
  AuthorName,
  Avatar,
  Container,
  File,
  PostData,
  Title,
  TitleContainer,
} from './styles';

import themes from '../../themes';

const ShimmerPost = () => {
  return (
    <Container>
      <AuthorContainer>
        <Avatar shimmerColors={themes.get().shimmer} />

        <AuthorContent>
          <AuthorName shimmerColors={themes.get().shimmer} />

          <PostData shimmerColors={themes.get().shimmer} />
        </AuthorContent>
      </AuthorContainer>

      <TitleContainer>
        <Title shimmerColors={themes.get().shimmer} />
      </TitleContainer>

      <File shimmerColors={themes.get().shimmer} />
    </Container>
  );
};

export default memo(ShimmerPost);
