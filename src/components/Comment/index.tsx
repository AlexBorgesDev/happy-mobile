import React, { memo, useState } from 'react';

import moment from 'moment';

import { Avatar } from 'react-native-paper';

// Types
import { CommentType } from '../../@types/types';

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
import CommentAnswer from './CommentAnswer';

const Comment = (data: CommentType) => {
  const [answers, setAnswers] = useState<CommentType[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [finishedAnswers, setFinishedAnswers] = useState(false);

  return (
    <Container>
      <Avatar.Image size={48} source={{ uri: data.author.image }} />

      <Content>
        <ContentText>{data.content}</ContentText>

        <ActionsContainer>
          <Caption>{capitalize(moment(data.updateAt).fromNow(), true)}</Caption>

          <ActionButton>
            <Caption>Responder</Caption>
          </ActionButton>
        </ActionsContainer>

        {data.haveChildren && (
          <SeeAnswersButton onPress={() => setShowAnswers(state => !state)}>
            <Line />

            <Caption>{showAnswers ? 'Ocultar' : 'Ver'} Respostas</Caption>
          </SeeAnswersButton>
        )}

        {showAnswers && (
          <>
            {answers.map(answer => (
              <CommentAnswer key={answer.id} {...answer} />
            ))}

            {!finishedAnswers && (
              <SeeAnswersButton>
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
