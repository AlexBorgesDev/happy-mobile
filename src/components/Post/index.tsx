import React, { memo, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types
import { PostType } from '../../@types/types';

// Components
import PostAuthor from './PostAuthor';
import PostContent from './PostContent';
import PostLike from './PostLike';
import PostSaved from './PostSaved';
import PostShare from './PostShare';

import themes from '../../themes';

import {
  ActionButton,
  ActionsContainer,
  Container,
  styles,
  Title,
} from './styles';

const Post = (data: PostType) => {
  const [liked, setLiked] = useState(data.liked);

  return (
    <Container style={styles.shadow}>
      <PostAuthor author={data.author} updateAt={data.updateAt} />

      <Title>{data.title}</Title>

      <PostContent
        id={data.id}
        liked={liked}
        content={data.content}
        onLiked={setLiked}
      />

      <ActionsContainer>
        <PostLike id={data.id} liked={liked} onLiked={setLiked} />

        <ActionButton activeOpacity={0.8}>
          <Icon name="chat-outline" size={24} color={themes.get().color} />
        </ActionButton>

        <PostShare slug={data.slug} content={data.content} />

        <PostSaved id={data.id} saved={data.saved} />
      </ActionsContainer>
    </Container>
  );
};

export default memo(Post);
