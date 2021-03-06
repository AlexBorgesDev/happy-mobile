import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, styles } from './styles';

const BtnNewPost = (props: { onPress: (param: boolean) => void }) => {
  return (
    <Container style={styles.shadow} onPress={() => props.onPress(true)}>
      <Icon name="plus" size={28} color="#fff" />
    </Container>
  );
};

export default memo(BtnNewPost);
