import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from 'react-redux';

// Types
import { PostLikeProps } from '../../@types/types';

// Actions
import snackActions from '../../store/actions/snack.actions';

// Services
import LikePostService from '../../services/likePost.service';

import themes from '../../themes';

import { ActionButton } from './styles';

const PostLike = (props: PostLikeProps) => {
  const sessionToken = useSelector(state => state.session.token);

  const likePostService = new LikePostService(props.id, sessionToken);

  const handleLike = async () => {
    const like = !props.liked;
    props.onLiked(like);

    try {
      if (like) await likePostService.add();
      else await likePostService.remove();
    } catch (err) {
      snackActions.setMessage('Erro ao reagir a um post');

      props.onLiked(!like);
    }
  };

  return (
    <ActionButton activeOpacity={0.8} onPress={handleLike}>
      <Icon
        name={props.liked ? 'heart' : 'heart-outline'}
        size={24}
        color={props.liked ? themes.get().primary : themes.get().color}
      />
    </ActionButton>
  );
};

export default memo(PostLike);
