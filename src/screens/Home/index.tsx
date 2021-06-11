import React from 'react';

// Components
import Post from '../../components/Post';

import { Container, Content } from './styles';

const Home = () => {
  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
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
    </Container>
  );
};

export default Home;
