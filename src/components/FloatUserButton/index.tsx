import React, { memo } from 'react';

import { Avatar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { TouchableOpacityProps } from 'react-native';

// Configs
import apiConfigs from '../../configs/api.configs';

import { Container, styles } from './styles';

const FloatUserButton = (props: TouchableOpacityProps) => {
  const user = useSelector(state => state.session.user);

  return (
    <Container style={styles.shadow} {...props}>
      <Avatar.Image
        size={40}
        source={{ uri: `${apiConfigs.baseUrl}${user?.image}` }}
      />
    </Container>
  );
};

export default memo(FloatUserButton);
