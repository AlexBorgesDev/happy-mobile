import React, { memo, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker, { Image } from 'react-native-image-crop-picker';

import { useSelector } from 'react-redux';

// Actions
import snackActions from '../../store/actions/snack.actions';

// Services
import newPostService from '../../services/newPost.service';

import themes from '../../themes';

import {
  ActionsContainer,
  Button,
  ButtonText,
  Container,
  Count,
  ImageIcon,
  Input,
  Title,
} from './styles';
import { ActivityIndicator } from 'react-native-paper';

const NewPost = (props: { onDismiss: () => void }) => {
  const sessionToken = useSelector(state => state.session.token);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState<Image>();

  const [loading, setLoading] = useState(false);

  const handleGetImage = async () => {
    try {
      const img = await ImagePicker.openPicker({
        cropping: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Editar Imagem',
        freeStyleCropEnabled: true,
        cropperToolbarColor: '#f4452e',
        cropperStatusBarColor: '#f4452e',
        cropperActiveWidgetColor: '#f4452e',
        cropperToolbarWidgetColor: '#ffffff',
      });

      setImage(img);
    } catch (err) {}
  };

  const handleNewPost = async () => {
    setLoading(true);

    if (!image) {
      setLoading(false);
      return snackActions.setMessage('O Post deve conter uma imagem');
    }

    try {
      await newPostService({ title, image }, sessionToken);

      setLoading(false);
      snackActions.setMessage('Post publicado com sucesso');

      props.onDismiss();
    } catch (err: any) {
      snackActions.setMessage('Erro ao tentar fazer um novo post');
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Novo Post</Title>

      <Input
        value={title}
        editable={!loading}
        multiline
        maxLength={250}
        autoCorrect
        placeholder="Titulo do post"
        autoCapitalize="sentences"
        placeholderTextColor={themes.get().placeholderColor}
        onChangeText={setTitle}
        onSubmitEditing={handleNewPost}
      />

      <ActionsContainer>
        <Button disabled={loading} onPress={handleGetImage}>
          {!image && (
            <Icon name="image" size={24} color={themes.get().captionColor} />
          )}

          {image && (
            <ImageIcon source={{ uri: image.path }} resizeMode="cover" />
          )}

          <ButtonText>{image ? 'Alterar' : 'Adicionar'}</ButtonText>
        </Button>

        <Count>{title.length}/250</Count>

        <Button disabled={loading} onPress={handleNewPost}>
          {!loading && (
            <Icon name="send" size={24} color={themes.get().primary} />
          )}

          {loading && (
            <ActivityIndicator
              size={24}
              animating
              color={themes.get().primary}
            />
          )}
        </Button>
      </ActionsContainer>
    </Container>
  );
};

export default memo(NewPost);
