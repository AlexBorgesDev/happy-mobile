import React, { memo, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from 'react-redux';

// Actions
import snackActions from '../../store/actions/snack.actions';

// Services
import SavedPostService from '../../services/savedPost.service';

import themes from '../../themes';

import { ActionButton, styles } from './styles';

const PostSaved = (props: { id: number; saved: boolean }) => {
  const sessionToken = useSelector(state => state.session.token);

  const [saved, setSaved] = useState(props.saved);

  const savedPostService = new SavedPostService(props.id, sessionToken);

  const handleSaved = async () => {
    const newSavedState = !saved;
    setSaved(newSavedState);

    try {
      if (newSavedState) await savedPostService.add();
      else await savedPostService.remove();
    } catch (err) {
      snackActions.setMessage(
        `Erro ao ${newSavedState ? 'salvar' : 'remover'} um post`,
      );

      setSaved(!newSavedState);
    }
  };

  return (
    <ActionButton
      style={styles.saved}
      activeOpacity={0.8}
      onPress={handleSaved}>
      <Icon
        name={saved ? 'bookmark' : 'bookmark-outline'}
        size={24}
        color={themes.get().color}
      />
    </ActionButton>
  );
};

export default memo(PostSaved);
