import api from './api';

import { Platform } from 'react-native';

import {
  ApiReturnPosts,
  ReturnApiUserUpdate,
  UserServiceUpdateData,
} from '../@types/types';

class UserService {
  private readonly token: string | undefined;

  constructor(token?: string) {
    this.token = token;
  }

  getPosts = async (page: number) => {
    if (!this.token) return;

    const { data } = await api.get(`users/posts?page${page}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });

    return data as ApiReturnPosts;
  };

  update = async (data: UserServiceUpdateData) => {
    const formData = new FormData();

    data.name && formData.append('name', data.name);
    data.email && formData.append('email', data.email);

    if (data.image) {
      const imageURL =
        Platform.OS === 'android'
          ? data.image.path
          : data.image.path?.replace('file://', '');

      formData.append('image', {
        url: imageURL,
        name: `${Date.now()}.${data.image.mime.split('/').reverse()[0]}`,
        type: data.image.mime,
      });
    }

    const { data: response } = await api.put('users', formData, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response as ReturnApiUserUpdate;
  };
}

export default UserService;
