import React, { FC } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  StyleProp,
  StyleSheet,
  View,
} from "react-native";
import { customStyles } from "../../styles/theme";

interface InputProps {
  errorMessage?: string;
  inputMode?: TextInputProps["inputMode"];
  keyboardType?: TextInputProps["keyboardType"];
  maxLength: number;
  onChangedText?: (text: string) => void;
  placeHolder: string;
  secureText?: boolean;
  showError?: boolean;
  style?: StyleProp<TextStyle>;
}

const BasicTextInput: FC<InputProps> = ({
  errorMessage,
  inputMode,
  keyboardType,
  maxLength,
  secureText = false,
  showError = false,
  style,
  placeHolder,
  onChangedText,
}) => {
  return (
    <View>
      <TextInput
        inputMode={inputMode}
        maxLength={maxLength}
        secureTextEntry={secureText}
        style={style}
        placeholder={placeHolder}
        onChangeText={onChangedText}
        keyboardType={keyboardType}
      />
      {showError && (
        <Text style={[customStyles.Regular17, styles.error]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "#ff1726",
  },
});

export default BasicTextInput;
