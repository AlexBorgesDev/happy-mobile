import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { FlatList, RefreshControl, StatusBar } from 'react-native';

// Actions
import snackActions from '../../store/actions/snack.actions';

// Components
import Post from '../../components/Post';
import ShimmerPost from '../../components/ShimmerPost';

// Service
import UserService from '../../services/user.service';

// Types
import { PostType } from '../../@types/types';
import { UserPostsProps } from '../../@types/screenProps';

import { Container, Content, FinishedButton, FinishedText } from './styles';

const UserPosts = ({ navigation }: UserPostsProps) => {
  const sessionToken = useSelector(state => state.session.token);

  const contentRef = useRef<FlatList>(null);

  const userService = useMemo(
    () => new UserService(sessionToken),
    [sessionToken],
  );

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleGetUserPosts = async (p = page, refresh?: boolean) => {
    if (loading || refreshing) return;
    refresh && setRefreshing(true);
    refresh && setLoading(true);

    try {
      const data = await userService.getPosts(p);
      if (!data) return;

      setPage(data.page++);
      setPosts(oldPosts => (refresh ? data.data : [...oldPosts, ...data.data]));

      data.total < data.take && setFinished(true);
    } catch (err) {
      snackActions.setMessage('Algo deu errado ao obter seus posts');
    }

    refresh && setRefreshing(false);
    refresh && setLoading(false);
  };

  const updateFeed = () => {
    contentRef.current?.scrollToIndex({ index: 0 });

    setPosts([]);
    setFinished(false);

    handleGetUserPosts(1, true);
  };

  useEffect(() => {
    userService
      .getPosts(1)
      .then(data => {
        if (!data) return;

        setPage(data.page++);
        setPosts(data.data);
        setLoading(false);

        data.total < data.take && setFinished(true);
      })
      .catch(() => {});
  }, [userService]);

  return (
    <Container>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.BackAction onPress={navigation.goBack} />

        <Appbar.Content title="Meus Posts" />
      </Appbar.Header>

      <Content
        ref={contentRef}
        data={posts}
        refreshing={refreshing}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
        keyExtractor={post => post.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => !finished && handleGetUserPosts()}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => handleGetUserPosts(1, true)}
          />
        }
        ListFooterComponent={
          <>
            {loading && <ShimmerPost />}

            {!loading && finished && (
              <>
                <FinishedText>
                  Ops!
                  {posts.length > 0
                    ? ' Esses são todos os seus posts.'
                    : ' Você ainda não fez nenhum post.'}
                </FinishedText>

                <FinishedButton mode="text" onPress={updateFeed}>
                  ATUALIZAR POSTS
                </FinishedButton>
              </>
            )}
          </>
        }
      />
    </Container>
  );
};

export default UserPosts;
