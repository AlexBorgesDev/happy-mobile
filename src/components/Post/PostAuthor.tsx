import React, { memo } from 'react';

import moment from 'moment';

import { Avatar } from 'react-native-paper';

// Types
import { PostAuthorProps } from '../../@types/types';

// Utils
import capitalize from '../../utils/capitalize';

import { AuthorContainer, AuthorContent, AuthorName, PostDate } from './styles';

const PostAuthor = (data: PostAuthorProps) => {
  return (
    <AuthorContainer>
      <Avatar.Image source={{ uri: data.author.image }} size={40} />

      <AuthorContent>
        <AuthorName numberOfLines={1}>{data.author.name}</AuthorName>

        <PostDate numberOfLines={1}>
          {capitalize(moment(data.updateAt).fromNow(), true)}
        </PostDate>
      </AuthorContent>
    </AuthorContainer>
  );
};

export default memo(PostAuthor);
