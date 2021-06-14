import React, { memo, useState } from 'react';

import moment from 'moment';

import { Avatar } from 'react-native-paper';

// Types
import { CommentProps, CommentType } from '../../@types/types';

// Configs
import apiConfigs from '../../configs/api.configs';

// Components
import CommentAnswer from './CommentAnswer';
import ShimmerComment from '../ShimmerComment';

// Services
import CommentService from '../../services/comment.service';

// Utils
import capitalize from '../../utils/capitalize';

import {
  ActionButton,
  ActionsContainer,
  Caption,
  Container,
  Content,
  ContentText,
  Line,
  SeeAnswersButton,
} from './styles';

const Comment = (data: CommentProps) => {
  const commentService = new CommentService(data.post.id);

  const [answers, setAnswers] = useState<CommentType[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [finishedAnswers, setFinishedAnswers] = useState(false);

  const handleGetAnswers = async (p = page, reset?: boolean) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await commentService.get(p, data.id);

      setPage(response.page++);
      setAnswers(oldAnswers =>
        reset ? response.data : [...oldAnswers, ...response.data],
      );

      response.total < response.take && setFinishedAnswers(true);
    } catch (err) {}

    setLoading(false);
  };

  const toggleShowAnswers = () => {
    const newState = !showAnswers;

    newState && handleGetAnswers(1, true);
    setShowAnswers(newState);
  };

  const onAnswerPress = () => {
    data.onAnswerPress({ id: data.id, content: data.content });
  };

  return (
    <Container>
      <Avatar.Image
        size={48}
        source={{ uri: `${apiConfigs.baseUrl}${data.author.image}` }}
      />

      <Content>
        <ContentText>{data.content}</ContentText>

        <ActionsContainer>
          <Caption>{capitalize(moment(data.updateAt).fromNow(), true)}</Caption>

          <ActionButton onPress={onAnswerPress}>
            <Caption>Responder</Caption>
          </ActionButton>
        </ActionsContainer>

        {data.haveChildren && (
          <SeeAnswersButton onPress={toggleShowAnswers}>
            <Line />

            <Caption>{showAnswers ? 'Ocultar' : 'Ver'} Respostas</Caption>
          </SeeAnswersButton>
        )}

        {showAnswers && (
          <>
            {answers.map(answer => (
              <CommentAnswer key={answer.id} {...answer} />
            ))}

            {loading && <ShimmerComment isAnswer />}

            {!finishedAnswers && (
              <SeeAnswersButton
                disabled={loading}
                onPress={() => handleGetAnswers()}>
                <Line />

                <Caption>Ver mais respostas</Caption>
              </SeeAnswersButton>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default memo(Comment);
