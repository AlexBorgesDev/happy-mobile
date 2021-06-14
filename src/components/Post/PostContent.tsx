import React, { memo, useCallback, useEffect, useRef } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AutoHeightImage from 'react-native-auto-height-image';

import { useSelector } from 'react-redux';
import { Animated, Dimensions } from 'react-native';

// Actions
import snackActions from '../../store/actions/snack.actions';

// Configs
import apiConfigs from '../../configs/api.configs';

// Types
import { PostContentProps } from '../../@types/types';

// Services
import LikePostService from '../../services/likePost.service';

import { ContentContainer, styles } from './styles';

const width = Dimensions.get('window').width;
const maxHeight = 72 * (Dimensions.get('window').height / 100);

const PostContent = (props: PostContentProps) => {
  let heartLastTap: number | null;

  const heartSize = useRef(new Animated.Value(0)).current;

  const sessionToken = useSelector(state => state.session.token);

  const likePostService = new LikePostService(props.id, sessionToken);

  const handleLiked = async () => {
    props.onLiked(true);

    try {
      await likePostService.add();
    } catch (err) {
      snackActions.setMessage('Erro ao reagir a um post');

      props.onLiked(false);
    }
  };

  const animatedHeart = useCallback(() => {
    Animated.sequence([
      Animated.timing(heartSize, {
        toValue: 1,
        duration: 175,
        useNativeDriver: true,
      }),
      Animated.timing(heartSize, {
        delay: 100,
        toValue: 0,
        duration: 175,
        useNativeDriver: true,
      }),
    ]).start();
  }, [heartSize]);

  const likedPress = () => {
    const now = Date.now();

    if (heartLastTap && now - heartLastTap < 300 && !props.liked) {
      animatedHeart();
      handleLiked();
    } else heartLastTap = now;
  };

  useEffect(() => {
    if (props.liked) animatedHeart();
  }, [animatedHeart, props.liked]);

  return (
    <ContentContainer activeOpacity={1} onPress={likedPress}>
      <AutoHeightImage
        width={width}
        source={{ uri: `${apiConfigs.baseUrl}${props.content}` }}
        maxHeight={maxHeight}
        resizeMode="cover"
      />

      <Animated.View
        style={[styles.contentHeart, { transform: [{ scale: heartSize }] }]}>
        <Icon
          name="heart"
          size={24 * (width / 100)}
          color="rgba(255, 255, 255, 0.8)"
        />
      </Animated.View>
    </ContentContainer>
  );
};

export default memo(PostContent);
