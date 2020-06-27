import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 24px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 32px;
  margin-top: 48px;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
`;

export const Description = styled.Text`
  color: #999591;
  font-size: 18px;
  margin-top: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const OkButton = styled(RectButton)`
  margin-top: 24px;
  padding: 12px 24px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ff9900;
`;

export const OkButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
