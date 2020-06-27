import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  margin: 24px 0;
  font-family: 'RobotoSlab-Medium';
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(RectButton)`
  margin-top: 40px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoutButtonText = styled.Text`
  color: #999591;
  font-size: 18px;
  margin-right: 12px;
  font-family: 'RobotoSlab-Regular';
`;

export const UserAvatarButton = styled(RectButton)`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  align-self: center;
  border-radius: 98px;
  background-color: #c4cdc811;
`;
