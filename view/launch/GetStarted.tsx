import React, { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Dimensions,
} from "react-native";
import { useDispatch, UseDispatch } from "react-redux";
import { setFirstLaunch } from "../../redux/slices/authSlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../MainNavigator";
import { customStyles } from "../../styles/theme";
import BasicTextInput from "../../components/input/BasicTextInput";
import useValidation from "../../helpers/signupValidation";
import { CommonActions } from "@react-navigation/native";

type FirstLaunchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GetStarted"
>;

type Props = {
  navigation: FirstLaunchScreenNavigationProp;
};

const GetStartedScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errors, validate } = useValidation();
  const { height: windowHeight } = Dimensions.get("window");

  const submitHandler = () => {
    const isValid = validate({ firstName, lastName, email, password });
    if (isValid) {
      dispatch(setFirstLaunch(false));
      navigation.navigate("Login");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: 90,
      })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, minHeight: windowHeight }}
      >
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={[styles.title, customStyles.Medium30]}>
              Create Account
            </Text>
            <Text style={[styles.description, customStyles.Regular17]}>
              Fill up the following information below. You'll receive an email
              notification once account is verified.
            </Text>
          </View>
          <View style={styles.container}>
            <BasicTextInput
              style={styles.input}
              placeHolder="Firstname"
              maxLength={30}
              onChangedText={setFirstname}
              showError={!!errors.firstName}
              errorMessage={errors.firstName}
            />
            <BasicTextInput
              style={styles.input}
              placeHolder="Lastname"
              maxLength={30}
              onChangedText={setLastname}
              showError={!!errors.lastName}
              errorMessage={errors.lastName}
            />
            <BasicTextInput
              style={styles.input}
              placeHolder="Email Address"
              maxLength={30}
              onChangedText={setEmail}
              showError={!!errors.email}
              errorMessage={errors.email}
              inputMode="email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.passwordDescription, customStyles.Regular17]}>
              Please enter your desired password that you will going to use to
              login to our service.
            </Text>
            <BasicTextInput
              secureText={true}
              style={styles.input}
              placeHolder="Password"
              maxLength={20}
              onChangedText={setPassword}
              showError={!!errors.password}
              errorMessage={errors.password}
            />
          </View>
          <View style={styles.container}>
            <Pressable style={styles.pressableButton} onPress={submitHandler}>
              <Text style={styles.pressableText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  title: {
    color: "#FF914D",
    marginBottom: "3%",
  },
  description: {
    color: "#242424",
    textAlign: "justify",
  },
  passwordDescription: {
    color: "#FF914D",
    textAlign: "justify",
    paddingBottom: "6%",
  },
  textContainer: {
    marginLeft: "6%",
    marginRight: "6%",
    paddingTop: "6%",
    paddingBottom: 20,
  },
  inputContainer: {
    marginLeft: "6%",
    marginRight: "6%",
  },
  container: {
    marginLeft: "6%",
    marginRight: "6%",
  },
  input: {
    borderWidth: 1,
    borderLeftColor: "transparent",
    borderColor: "#FF914D",
    width: "100%",
    height: 40,
    padding: 10,
    marginTop: 10,
  },
  pressableButton: {
    backgroundColor: "#FF914D",
    width: "100%",
    height: "25%",
    justifyContent: "center",
  },
  pressableText: {
    color: "#ffffff",
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    textAlign: "center",
  },
});

export default GetStartedScreen;
