import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { Modal, Portal } from 'react-native-paper';
import { FlatList, RefreshControl } from 'react-native';

// Types
import { PostType } from '../../@types/types';

// Components
import BtnNewPost from '../../components/BtnNewPost';
import NewPost from '../../components/NewPost';
import Post from '../../components/Post';
import ShimmerPost from '../../components/ShimmerPost';

// Services
import * as postService from '../../services/post.service';

import {
  Container,
  Content,
  FinishedPostButton,
  FinishedPostText,
  styles,
} from './styles';

const Home = () => {
  const sessionToken = useSelector(state => state.session.token);

  const contentRef = useRef<FlatList>(null);

  const [page, setPage] = useState(1);
  const [maxDate, setMaxDate] = useState(Date.now());

  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [finishedPost, setFinishedPost] = useState(false);

  const [showNewPost, setShowNewPost] = useState(false);

  const handleGetPosts = async (p = page, d = maxDate, refresh?: boolean) => {
    if (loading) return;
    setLoading(true);

    try {
      const data = await postService.get(p, d, sessionToken);

      setPage(data.page++);
      setPosts(oldPost => (refresh ? data.data : [...oldPost, ...data.data]));

      data.total < data.take && setFinishedPost(true);
    } catch (err) {}

    setLoading(false);
  };

  const handleRefresh = async () => {
    const now = Date.now();

    setPosts([]);
    setMaxDate(now);
    setRefreshing(true);

    await handleGetPosts(1, now, true);

    setRefreshing(false);
  };

  const updateFeed = () => {
    contentRef.current?.scrollToIndex({ index: 0 });

    setPosts([]);
    setFinishedPost(false);

    handleRefresh();
  };

  useEffect(() => {
    const now = Date.now();

    postService.get(1, now, sessionToken).then(res => {
      setPage(2);
      setMaxDate(now);
      setLoading(false);

      setPosts(res.data);

      res.total < res.take && setFinishedPost(true);
    });
  }, [sessionToken]);

  return (
    <Container>
      <Content
        ref={contentRef}
        data={posts}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
        refreshing={refreshing}
        keyExtractor={post => post.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => !finishedPost && handleGetPosts()}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListFooterComponent={
          <>
            {loading && <ShimmerPost />}

            {!loading && finishedPost && (
              <>
                <FinishedPostText>
                  Ops!
                  {posts.length > 0
                    ? ' Você rolou tanto o feed que acabou chegando no fim.'
                    : ' Nenhum post foi encontrado.'}
                </FinishedPostText>

                <FinishedPostButton mode="text" onPress={updateFeed}>
                  ATUALIZAR FEED
                </FinishedPostButton>
              </>
            )}
          </>
        }
      />

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
