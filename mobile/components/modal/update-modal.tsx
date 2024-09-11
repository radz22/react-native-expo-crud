import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RefObject, useEffect } from "react";
import { type user } from "@/types/user";
import { useState } from "react";
import { UpdateUserHook } from "@/hooks/update-user-hook";

interface ChildComponentProps {
  updateActionSheetRef: RefObject<ActionSheetRef>;
  user: user | null;
}
export const UpdateModal: React.FC<ChildComponentProps> = ({
  updateActionSheetRef,
  user,
}) => {
  const [firstName, setFirstName] = useState<string>(user?.firstname || "");
  const [lastName, setLastName] = useState<string>(user?.lastname || "");
  const [id, setId] = useState<string>(user?._id || "");
  const [age, setAge] = useState<string>(user?.age || "");
  const [work, setWork] = useState<string>(user?.work || "");
  const { handleUpdate } = UpdateUserHook();
  useEffect(() => {
    if (user) {
      setFirstName(user.firstname || "");
      setLastName(user.lastname || "");
      setAge(user.age || "");
      setWork(user.work || "");
      setId(user._id || "");
    }
  }, [user]);

  const handleUpdateUser = () => {
    const data: user = {
      _id: id,
      firstname: firstName,
      lastname: lastName,
      age: age,
      work: work,
    };

    handleUpdate(data);
  };
  return (
    <View>
      <ActionSheet ref={updateActionSheetRef}>
        <View style={styles.actionsheet}>
          <View style={styles.formcontent}>
            <View style={styles.form}>
              <View>
                <Text style={styles.title}> Form</Text>
              </View>

              <View style={styles.formdata}>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="FirstName"
                    value={firstName}
                    onChangeText={(newValue) => setFirstName(newValue)}
                    keyboardType="default" // Specifies the keyboard type
                  />
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="LastName"
                    value={lastName}
                    onChangeText={(newValue) => setLastName(newValue)}
                    keyboardType="default" // Specifies the keyboard type
                  />
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={(newValue) => setAge(newValue)}
                    placeholder="Age"
                    keyboardType="default" // Specifies the keyboard type
                  />
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={work}
                    onChangeText={(newValue) => setWork(newValue)}
                    placeholder="Work"
                    keyboardType="default" // Specifies the keyboard type
                  />
                </View>
              </View>

              <TouchableOpacity onPress={handleUpdateUser}>
                <Text style={styles.buttonText}>Update </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  actionsheet: {
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 30,
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
