import React, { useState } from 'react';

import { Modal, Portal } from 'react-native-paper';

// Components
import BtnNewPost from '../../components/BtnNewPost';
import NewPost from '../../components/NewPost';
import Post from '../../components/Post';
import ShimmerPost from '../../components/ShimmerPost';

import { Container, Content, styles } from './styles';

const Home = () => {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <ShimmerPost />

        <Post
          id={1}
          slug="teste"
          title="Post Teste"
          content="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          createAt="2021-05-24T22:07:56.510Z"
          updateAt="2021-05-24T22:07:56.510Z"
          liked={false}
          saved={false}
          author={{
            name: 'Usuário Teste',
            image:
              'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
      </Content>

      <BtnNewPost onPress={setShowNewPost} />

      <Portal>
        <Modal
          visible={showNewPost}
          contentContainerStyle={styles.modal}
          onDismiss={() => setShowNewPost(false)}>
          <NewPost onDismiss={() => setShowNewPost(false)} />
        </Modal>
      </Portal>
    </Container>
  );
};

export default Home;
