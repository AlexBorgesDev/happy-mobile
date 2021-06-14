import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Appbar } from 'react-native-paper';
import { FlatList, RefreshControl, StatusBar } from 'react-native';

// Types
import { CommentType } from '../../@types/types';
import { CommentsProps } from '../../@types/screenProps';

// Components
import Comment from '../../components/Comment';
import CommentInput from '../../components/CommentInput';
import ShimmerComment from '../../components/ShimmerComment';

// Services
import CommentService from '../../services/comment.service';

import { Container, Content, FinishedButton, FinishedText } from './styles';

const Comments = (props: CommentsProps) => {
  const { postId } = props.route.params;

  const contentRef = useRef<FlatList>(null);

  const commentService = useMemo(() => new CommentService(postId), [postId]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [finishedComments, setFinishedComments] = useState(false);

  const [parentComment, setParentComment] =
    useState<{ id: number; content: string }>();

  const handleGetComments = async (p = page, refresh?: boolean) => {
    setLoading(true);
    refresh && setRefreshing(true);

    try {
      const data = await commentService.get(p, null);

      setPage(data.page++);
      setComments(oldComments =>
        refresh ? data.data : [...oldComments, ...data.data],
      );

      data.total < data.take && setFinishedComments(true);
    } catch (err) {}

    refresh && setRefreshing(false);
    setLoading(false);
  };

  const updateComments = () => {
    contentRef.current?.scrollToIndex({ index: 0 });

    setComments([]);
    setFinishedComments(false);

    handleGetComments(1, true);
  };

  const onNewComment = (comment: CommentType) => {
    if (typeof comment.fatherId === 'number') {
      setComments(oldComments =>
        oldComments.map(oldComment => ({
          ...oldComment,
          haveChildren: oldComment.id === comment.fatherId,
        })),
      );
    } else setComments(oldComments => [...oldComments, comment]);
  };

  useEffect(() => {
    commentService
      .get(1, null)
      .then(data => {
        setPage(data.page++);
        setLoading(false);
        setComments(data.data);

        data.total < data.take && setFinishedComments(true);
      })
      .catch(err => console.log(err.response.data));
  }, [commentService]);

  return (
    <Container>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.Content title="Comentários" />

        <Appbar.Action icon="close" onPress={props.navigation.goBack} />
      </Appbar.Header>

      <Content
        ref={contentRef}
        data={comments}
        renderItem={({ item }) => (
          <Comment key={item.id} {...item} onAnswerPress={setParentComment} />
        )}
        refreshing={refreshing}
        keyExtractor={comment => comment.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => !finishedComments && handleGetComments()}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => handleGetComments(1, true)}
          />
        }
        ListFooterComponent={
          <>
            {loading && <ShimmerComment />}

            {!loading && finishedComments && (
              <>
                <FinishedText>
                  {comments.length > 0
                    ? 'Esses foram todos os comentários.'
                    : 'Esse post ainda não tem nenhum comentário.'}
                </FinishedText>

                <FinishedButton mode="text" onPress={updateComments}>
                  ATUALIZAR COMETÁRIOS
                </FinishedButton>
              </>
            )}
          </>
        }
      />

      <CommentInput
        postId={postId}
        father={parentComment}
        onNewComment={onNewComment}
        onNoCommentDad={() => setParentComment(undefined)}
      />
    </Container>
  );
};

export default Comments;
