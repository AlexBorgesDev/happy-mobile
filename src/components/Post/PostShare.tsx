import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Share from 'react-native-share';

import themes from '../../themes';

import { ActionButton } from './styles';

const PostShare = ({ slug, content }: { slug: string; content: string }) => {
  const handleShare = async () => {
    let fileType: string | string[] = content.split('.');
    fileType = fileType[fileType.length - 1];

    try {
      const { data } = await axios.get(content, {
        responseType: 'blob',
      });

      // eslint-disable-next-line no-undef
      const reader = new FileReader();

      reader.readAsDataURL(data);
      reader.onloadend = async function () {
        try {
          await Share.open({
            url: `data:image/${fileType === 'jpg' ? 'jpeg' : fileType};base64,${
              String(reader.result).split(',')[1]
            }`,
            type: `image/${fileType === 'jpg' ? 'jpeg' : fileType}`,
            title: 'Happy - Compartilhar post',
            message: `Happy - ${slug}`,
          });
        } catch (err) {}
      };
    } catch (err) {}
  };

  return (
    <ActionButton activeOpacity={0.8} onPress={handleShare}>
      <Icon name="share-variant" size={24} color={themes.get().color} />
    </ActionButton>
  );
};

export default memo(PostShare);
