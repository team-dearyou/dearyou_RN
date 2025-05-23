import styled from '@emotion/native';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface IInputsType {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  label?: string;
}

export const Inputs = ({
  label,
  placeholder,
  value,
  onChange,
}: IInputsType) => {
  return (
    <View>
      <Label>{label}</Label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </View>
  );
};

const Label = styled(Text)`
  font-size: 12px;
  font-weight: 700;
  color: #483e2e;
  font-family: 'MaruBuriBold';
`;

const Input = styled(TextInput)`
  width: 100%;
  padding-left: 18px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #cccccc;
  font-size: 12px;
  color: #000000;
  font-family: 'MaruBuriBold';
  &::placeholder {
    font-size: 12px;
  }
`;
