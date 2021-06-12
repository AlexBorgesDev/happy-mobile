import React from 'react';

import { Appbar } from 'react-native-paper';
import { StatusBar } from 'react-native';

// Types
import { CommentsProps } from '../../@types/screenProps';

// Components
import Comment from '../../components/Comment';

import { Container, Scroll } from './styles';

const Comments = (props: CommentsProps) => {
  const { postId } = props.route.params;

  return (
    <Container>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.Content title="Comentários" />

        <Appbar.Action icon="close" onPress={props.navigation.goBack} />
      </Appbar.Header>

      <Scroll showsVerticalScrollIndicator={false}>
        <Comment
          id={1}
          content="Comentário Teste"
          createAt="2021-05-24T22:07:56.510Z"
          updateAt="2021-05-24T22:07:56.510Z"
          fatherId={null}
          haveChildren={false}
          post={{
            id: postId,
            slug: 'teste',
          }}
          author={{
            name: 'Usuário Teste',
            image:
              'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
      </Scroll>
    </Container>
  );
};

export default Comments;
