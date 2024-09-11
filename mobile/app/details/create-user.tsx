// app/details/[id].js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { router } from "expo-router";
import { type createuser } from "@/types/create-usert";
import { CreateUser } from "@/hooks/create-user-hook";

export default function CreaUser() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const { handleCreate } = CreateUser();

  const handleCreateUser = () => {
    const data: createuser = {
      firstname: firstName,
      lastname: lastName,
      age: age,
      work: work,
    };
    handleCreate(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
      <View style={styles.formcontent}>
        <View style={styles.form}>
          <View>
            <Text style={styles.title}> Form</Text>
          </View>

          <View style={styles.formdata}>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setFirstName(value)}
                value={firstName}
                placeholder="FirstName"
                keyboardType="default" // Specifies the keyboard type
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setLastName(value)}
                value={lastName}
                placeholder="LastName"
                keyboardType="default" // Specifies the keyboard type
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setAge(value)}
                value={age}
                placeholder="Age"
                keyboardType="default" // Specifies the keyboard type
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setWork(value)}
                value={work}
                placeholder="Work"
                keyboardType="default" // Specifies the keyboard type
              />
            </View>
          </View>

          <TouchableOpacity onPress={handleCreateUser}>
            <Text style={styles.buttonText}>Create </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers formcontent vertically
    alignItems: "center", // Centers formcontent horizontally
  },
  button: {
    marginBottom: 20,
  },
  formcontent: {
    width: "90%", // Adjust width to control how much space formcontent takes
    alignItems: "center", // Centers children horizontally within formcontent
  },
  form: {
    width: "100%", // Makes the form take full width of formcontent
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center", // Centers the title horizontally
  },
  formdata: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 5,
    width: "100%", // Makes the input take the full width of form
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "#841584",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
});
