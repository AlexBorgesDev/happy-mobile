import React, { useRef, useState } from 'react';

import ImagePicker, { Image } from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector } from 'react-redux';
import { Appbar, Avatar } from 'react-native-paper';
import { Platform, StatusBar, TextInput } from 'react-native';

// Actions
import snackActions from '../../store/actions/snack.actions';
import sessionActions from '../../store/actions/session.actions';

// Configs
import apiConfigs from '../../configs/api.configs';

// Services
import UserService from '../../services/user.service';

// Types
import { GenericLoggedInNavigation } from '../../@types/screenProps';

import {
  AvatarButton,
  Container,
  Content,
  Input,
  styles,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const EditProfile = ({ navigation }: GenericLoggedInNavigation) => {
  const { user, token } = useSelector(state => state.session);

  const userService = new UserService(token);

  const [loading, setLoading] = useState(false);

  const emailRef = useRef<TextInput>(null);

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const [newImage, setNewImage] = useState<Image>();

  const handleChangeImage = async () => {
    try {
      const img = await ImagePicker.openPicker({
        cropping: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Editar Imagem',
        cropperCircleOverlay: true,
        cropperToolbarColor: '#f4452e',
        cropperStatusBarColor: '#f4452e',
        cropperActiveWidgetColor: '#f4452e',
        cropperToolbarWidgetColor: '#ffffff',
      });

      setNewImage(img);
    } catch (err) {
      setNewImage(undefined);
    }
  };

  const handleUpdate = async () => {
    if (loading || !user) return;
    setLoading(true);

    const obj = {
      name: name === user?.name ? undefined : name,
      email: email === user?.email ? undefined : email,
      image: newImage,
    };

    try {
      const data = await userService.update(obj);
      console.log(data);

      const newUserData = { ...user, ...data.data };

      await AsyncStorage.setItem('session_user', JSON.stringify(newUserData));

      sessionActions.setUser(newUserData);
      snackActions.setMessage('Perfil atualizadas com sucesso');
    } catch (err) {
      snackActions.setMessage(
        'Algo deu errado ao atualizar as informações do seu perfil',
      );
    }

    setLoading(false);
  };

  return (
    <Container>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.BackAction onPress={navigation.goBack} />

        <Appbar.Content title="Editar Perfil" />
      </Appbar.Header>

      <Content showsVerticalScrollIndicator={false}>
        <AvatarButton disabled={loading} onPress={handleChangeImage}>
          <Avatar.Image
            size={136}
            source={{
              uri: newImage
                ? Platform.OS === 'android'
                  ? newImage.path
                  : newImage.path.replace('file://', '')
                : `${apiConfigs.baseUrl}${user?.image}`,
            }}
          />
        </AvatarButton>

        <Input
          mode="outlined"
          label="Nome"
          value={name}
          editable={!loading}
          blurOnSubmit={false}
          returnKeyType="next"
          autoCapitalize="sentences"
          textContentType="name"
          autoCompleteType="name"
          onChangeText={setName}
          onSubmitEditing={() => emailRef.current?.focus()}
        />

        <Input
          ref={emailRef}
          mode="outlined"
          label="Email"
          value={email}
          editable={!loading}
          keyboardType="email-address"
          returnKeyType="done"
          autoCapitalize="none"
          textContentType="emailAddress"
          autoCompleteType="email"
          onChangeText={setEmail}
          onSubmitEditing={handleUpdate}
        />
      </Content>

      {user &&
        (email !== user.email ||
          name !== user.name ||
          newImage !== undefined) && (
          <SubmitButton
            mode="contained"
            loading={loading}
            disabled={loading}
            contentStyle={styles.btn}
            onPress={handleUpdate}>
            <SubmitButtonText>ATUALIZAR INFORMAÇÕES</SubmitButtonText>
          </SubmitButton>
        )}
    </Container>
  );
};

export default EditProfile;
