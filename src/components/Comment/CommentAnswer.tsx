import React, { memo } from 'react';

import moment from 'moment';

import { Avatar } from 'react-native-paper';

// Types
import { CommentType } from '../../@types/types';

// Utils
import capitalize from '../../utils/capitalize';

import { AnswerContainer, Caption, Content, ContentText } from './styles';

const CommentAnswer = (data: CommentType) => {
  return (
    <AnswerContainer>
      <Avatar.Image size={32} source={{ uri: data.author.image }} />

      <Content>
        <ContentText>{data.content}</ContentText>

        <Caption>{capitalize(moment(data.updateAt).fromNow(), true)}</Caption>
      </Content>
    </AnswerContainer>
  );
};

export default memo(CommentAnswer);
