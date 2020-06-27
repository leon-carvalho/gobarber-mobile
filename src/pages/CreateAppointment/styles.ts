import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

interface ProviderSelectedProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  background-color: #28262e;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  margin-left: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Content = styled.ScrollView``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  margin-left: auto;
  border-radius: 28px;
  background-color: #c4cdc811;
`;

export const ProvidersListContainer = styled.View`
  height: 122px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderSelectedProps>`
  flex-direction: row;
  align-items: center;

  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? '#ff9900' : '#3e3b47')};
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${(props) => (props.selected ? '#f4ede8' : '#c4cdc811')};
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  color: ${(props) => (props.selected ? '#232129' : '#ff9900')};
`;

export const CalendarContainer = styled.View``;

export const CalendarTitle = styled.Text`
  color: #f4edef;
  font-size: 24px;
  margin: 0 24px 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  margin: 0 24px;
  border-radius: 10px;
  background-color: #ff9900;

  align-items: center;
  justify-content: center;
`;

export const OpenDatePickerButtonText = styled.Text`
  color: #232129;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #999591;
  margin: 0 24px 12px;
  font-family: 'RobotoSlab-Regular';
`;

export const SectionContent = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``;

export const Hour = styled(RectButton)<HourProps>`
  padding: 12px;
  margin-right: 8px;
  border-radius: 10px;
  opacity: ${(props) => (props.available ? 1 : 0.3)};
  background-color: ${(props) => (props.selected ? '#ff9900' : '#3e3b47')};
`;

export const HourText = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 50px;
  margin: 0 24px 24px;
  border-radius: 10px;
  background-color: #ff9900;

  align-items: center;
  justify-content: center;
`;

export const CreateAppointmentButtonText = styled.Text`
  color: #232129;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
