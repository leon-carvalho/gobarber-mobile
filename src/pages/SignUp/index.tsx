import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => (
  <>
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Faça seu logon</Title>
          </View>

          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button onPress={() => console.log('empty')}>Crie sua conta</Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <BackToSignIn>
      <Icon name="arrow-left" size={20} color="#fff" />
      <BackToSignInText>Voltar para logon</BackToSignInText>
    </BackToSignIn>
  </>
);

export default SignUp;
