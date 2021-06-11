import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.inverseColor};
`;

export const Title = styled.Text`
  padding: 0 16px 14px;

  color: ${({ theme }) => theme.color};
  font-size: 15px;
  font-family: 'Inter-Medium';
`;

export const AuthorContainer = styled.View`
  padding: 14px 16px;

  align-items: center;
  flex-direction: row;
`;

export const AuthorContent = styled.View`
  flex: 1;
  margin-left: 8px;
  flex-direction: column;
`;

export const AuthorName = styled.Text`
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-family: 'Inter-SemiBold';
`;

export const PostDate = styled.Text`
  color: ${({ theme }) => theme.captionColor};
  font-size: 12px;
  font-family: 'Inter-Medium';
`;

export const ContentContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ActionsContainer = styled.View`
  padding: 8px 16px;

  align-items: center;
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-right: 16px;

  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  contentHeart: {
    position: 'absolute',
  },

  saved: {
    marginRight: 0,
    marginLeft: 'auto',
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
