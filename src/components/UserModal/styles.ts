import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 2.5px;
  background-color: ${({ theme }) => theme.inverseColor};
`;

export const Header = styled.View`
  padding: 16px;

  align-items: center;
  flex-direction: row;
`;

export const HeaderContent = styled.View`
  flex: 1;
  padding: 0px 8px;
`;

export const HeaderUserName = styled.Text`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-family: 'Inter-Medium';
`;

export const HeaderCaption = styled.Text`
  color: ${({ theme }) => theme.captionColor};
  font-size: 12px;
  font-family: 'Inter-Medium';
`;

export const Button = styled.TouchableOpacity`
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
`;

export const BtnText = styled.Text<{ red?: boolean }>`
  flex: 1;
  margin-right: 16px;

  color: ${({ red, theme }) => (red ? theme.primary : theme.captionColor)};
  font-size: 16px;
  text-align: right;
  font-family: 'Inter-Medium';
`;

export const styles = StyleSheet.create({
  notMargin: {
    margin: 0,
  },
});
