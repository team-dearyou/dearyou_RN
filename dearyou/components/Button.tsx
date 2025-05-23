import styled from '@emotion/native';
import { TouchableOpacity, Text } from 'react-native';

interface IButtonType {
  color?: string;
  backgroundColor?: string;
  children: string;
  onClick?: () => void;
}

export const Button = ({
  color = '#ffffff',
  backgroundColor = '#F7D3C0',
  children,
  onClick,
}: IButtonType) => {
  return (
    <ButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
      <BtnText color={color}>{children}</BtnText>
    </ButtonContainer>
  );
};

const BtnText = styled(Text)<Omit<IButtonType, 'children'>>`
  font-family: 'MaruBuri-Bold';
  font-size: 14px;
  color: ${({ color }) => color};
`;

const ButtonContainer = styled(TouchableOpacity)<Omit<IButtonType, 'children'>>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
