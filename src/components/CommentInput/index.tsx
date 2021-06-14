import React, { memo, useEffect, useRef, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';

// Types
import { CommentInputProps } from '../../@types/types';

// Actions
import snackActions from '../../store/actions/snack.actions';

// Services
import CommentService from '../../services/comment.service';

import themes from '../../themes';

import {
  Container,
  Input,
  InputContainer,
  ReplyActionButton,
  ReplyActionsContainer,
  ReplyContentText,
  ReplyText,
  styles,
  SubmitButton,
} from './styles';

const CommentInput = (props: CommentInputProps) => {
  const sessionToken = useSelector(state => state.session.token);

  const inputRef = useRef<TextInput>(null);

  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const commentService = new CommentService(props.postId, sessionToken);

  const handleMyAnswer = async () => {
    setLoading(true);

    if (!answer) return setLoading(false);

    try {
      const comment = await commentService.newComment(
        answer,
        props.father?.id || null,
      );

      setAnswer('');
      props.onNewComment && props.onNewComment(comment.data);
    } catch (err) {
      snackActions.setMessage(
        'Algo deu errado ao tentar postar seu comentário',
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    props.father?.id && inputRef.current?.focus();
  }, [props.father]);

  return (
    <Container>
      {props.father && (
        <>
          <ReplyActionsContainer>
            <ReplyText>Respondendo ao comentário:</ReplyText>

            <ReplyActionButton onPress={props.onNoCommentDad}>
              <Icon name="close" size={15} color={themes.get().captionColor} />
            </ReplyActionButton>
          </ReplyActionsContainer>

          <ReplyContentText>{props.father.content}</ReplyContentText>
        </>
      )}

      <InputContainer style={styles.shadow}>
        <Input
          ref={inputRef}
          value={answer}
          editable={!loading}
          placeholder="Digite aqui seu comentário"
          placeholderTextColor={themes.get().placeholderColor}
          onChangeText={setAnswer}
        />

        <SubmitButton disabled={loading} onPress={handleMyAnswer}>
          {!loading && (
            <Icon name="send" size={24} color={themes.get().primary} />
          )}

          {loading && (
            <ActivityIndicator
              animating
              size={24}
              color={themes.get().primary}
            />
          )}
        </SubmitButton>
      </InputContainer>
    </Container>
  );
};

export default memo(CommentInput);
