import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import { Snackbar, useTheme } from "react-native-paper";

const ToastDialog = ({ message }: { message: string }) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (message) {
      setVisible(true);
    }
  }, [message]);

  const onToggleSnackBar = () => setVisible(!visible);

  return (
    <Snackbar
      visible={visible}
      onDismiss={onToggleSnackBar}
      duration={Snackbar.DURATION_SHORT}
      style={{ backgroundColor: theme.colors.primary } as ViewStyle}
    >
      <TouchableWithoutFeedback onPress={onToggleSnackBar}>
        <Text style={styles.snackbarText}>{message}</Text>
      </TouchableWithoutFeedback>
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbarText: {
    color: "#ffffff",
  },
});

export default ToastDialog;
