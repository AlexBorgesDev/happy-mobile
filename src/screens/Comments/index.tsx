import React from 'react';

import { Appbar } from 'react-native-paper';
import { StatusBar } from 'react-native';

// Types
import { CommentsProps } from '../../@types/screenProps';

import { Container } from './styles';

const Comments = (props: CommentsProps) => {
  const { postId } = props.route.params;

  return (
    <Container>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.Content title="Comentários" />

        <Appbar.Action icon="close" onPress={props.navigation.goBack} />
      </Appbar.Header>
    </Container>
  );
};

export default Comments;
