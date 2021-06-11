import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/core';

import { Container } from './styles';

const BtnNewPost = () => {
  const { navigate } = useNavigation();

  return (
    <Container onPress={() => navigate('newPost')}>
      <Icon name="plus" size={28} color="#fff" />
    </Container>
  );
};

export default memo(BtnNewPost);
