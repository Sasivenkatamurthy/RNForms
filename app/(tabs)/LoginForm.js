import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validation = () => {
    let error = {};

    if (!userName) error.userName = "Username is Required";
    if (!password) error.password = "Password is Required";

    setError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = () => {
    if (validation()) {
      console.log("Submitted", userName, password);
      setUserName("");
      setPassword("");
      setError({});
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={Styles.Container}>
      <View style={Styles.form}>
        <Image source={require("../../assets/images/p2.png")} style={Styles.image} />
        
        <Text style={Styles.label}>Username </Text>
        <TextInput
          style={Styles.input}
          placeholder="Enter User Name"
          value={userName}
          onChangeText={setUserName}
        />
        {error.userName ? <Text style={Styles.errorText}>{error.userName}</Text> : null}

        <Text style={Styles.label}>Password</Text>
        <TextInput
          style={Styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword} 
          secureTextEntry
          keyboardType="default"
        />
        {error.password ? <Text style={Styles.errorText}>{error.password}</Text> : null}

        <Button style={Styles.button} title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F5F5F1',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "#F5F5F1",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 15,
  },
  image: {
    height: 170,
    width: 150,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
