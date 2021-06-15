import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector } from 'react-redux';
import { Avatar, Divider, IconButton } from 'react-native-paper';

// Actions
import snackActions from '../../store/actions/snack.actions';
import sessionActions from '../../store/actions/session.actions';

// Configs
import apiConfigs from '../../configs/api.configs';

// Types
import { UserModalProps } from '../../@types/types';

import themes from '../../themes';

import {
  BtnText,
  Button,
  Container,
  Header,
  HeaderCaption,
  HeaderContent,
  HeaderUserName,
  styles,
} from './styles';

const UserModal = (props: UserModalProps) => {
  const user = useSelector(state => state.session.user);

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem('session_token');
      await AsyncStorage.removeItem('session_user');

      sessionActions.setUser(undefined);
      sessionActions.setToken(undefined);
      sessionActions.setType('notLogged');
    } catch (err) {
      snackActions.setMessage('Algo deu errado ao tentar finalizar a sessão');
    }
  };

  const handleMyPosts = () => {
    props.navigation.navigate('userPosts');
    props.onDismiss();
  };

  return (
    <Container>
      <Header>
        <Avatar.Image
          size={40}
          source={{ uri: `${apiConfigs.baseUrl}${user?.image}` }}
        />

        <HeaderContent>
          <HeaderUserName numberOfLines={1}>{user?.name}</HeaderUserName>

          <HeaderCaption numberOfLines={1}>{user?.email}</HeaderCaption>
        </HeaderContent>

        <IconButton
          icon="close"
          style={styles.notMargin}
          onPress={props.onDismiss}
        />
      </Header>

      <Divider />

      <Button onPress={() => {}}>
        <BtnText>Editar Perfil</BtnText>

        <Icon
          size={20}
          name="pencil-outline"
          color={themes.get().captionColor}
        />
      </Button>

      <Divider />

      <Button onPress={handleMyPosts}>
        <BtnText>Meus Posts</BtnText>

        <Icon size={20} name="post-outline" color={themes.get().captionColor} />
      </Button>

      <Divider />

      <Button onPress={() => {}}>
        <BtnText>Posts Salvos</BtnText>

        <Icon
          size={20}
          name="bookmark-outline"
          color={themes.get().captionColor}
        />
      </Button>

      <Divider />

      <Button onPress={handleLogOut}>
        <BtnText red>Sair</BtnText>

        <Icon size={20} name="logout" color={themes.get().primary} />
      </Button>
    </Container>
  );
};

export default memo(UserModal);
