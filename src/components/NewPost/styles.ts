import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;

  border-radius: 2.5px;
  background-color: ${({ theme }) => theme.inverseColor};
`;

export const Title = styled.Text`
  margin-bottom: 12px;

  color: ${({ theme }) => theme.color};
  font-size: 18px;
  font-family: 'Inter-SemiBold';
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-family: 'Inter-Regular';
`;

export const ActionsContainer = styled.View`
  width: 100%;
  max-width: 100%;
  margin-top: 8px;

  overflow: hidden;

  align-items: center;
  flex-direction: row;
`;

export const Count = styled.Text`
  margin-right: 16px;
  margin-left: auto;

  color: ${({ theme }) => theme.captionColor};
  font-size: 14px;
  font-family: 'Inter-Medium';
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;

  color: ${({ theme }) => theme.captionColor};
  font-size: 14px;
  font-family: 'Inter-Medium';
`;

export const ImageIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
