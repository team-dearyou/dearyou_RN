import { View, Text } from 'react-native';
import { Button, Inputs } from '../components';
import styled from '@emotion/native';

export const LoginScreen = () => {
  return (
    <Container>
      <Text>login</Text>
      <LogoContainer>
        <Logo>Dearyou</Logo>
        <InputContainer>
          <Inputs placeholder="아이디를 입력하세요" label="아이디" />
          <Inputs placeholder="비밀번호를 입력하세요" label="비밀번호" />
        </InputContainer>
      </LogoContainer>
      <BtnContainer>
        <Button>로그인</Button>
        <Button color="#483E2E" backgroundColor="#F0E9E4">
          회원가입
        </Button>
      </BtnContainer>
    </Container>
  );
};

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 80px 35px;
`;

const BtnContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Logo = styled(Text)`
  font-family: 'MaruBuriBold';
  font-size: 32px;
  color: #483e2e;
`;

const InputContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
const LogoContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  width: 100%;
`;
