import api from './api';

import { Image } from 'react-native-image-crop-picker';
import { Platform } from 'react-native';

type Data = {
  title: string;
  image: Image;
};

const newPostService = async (data: Data, token?: string) => {
  const formData = new FormData();

  const imageURL =
    Platform.OS === 'android'
      ? data.image.sourceURL
      : data.image.sourceURL?.replace('file://', '');

  formData.append('title', data.title);
  formData.append('content', {
    uri: imageURL,
    name: `${Date.now()}.${data.image.mime.split('/').reverse()[0]}`,
    type: data.image.mime,
  });

  await api.post('posts', formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default newPostService;
