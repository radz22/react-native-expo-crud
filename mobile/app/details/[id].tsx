// app/details/[id].js
import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { GetUserById } from "@/hooks/get-user-by-id-hook";
import { DeleteModal } from "@/components/modal/delete-modal";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { UpdateModal } from "@/components/modal/update-modal";
const DetailsScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data } = GetUserById(id as string);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const actionSheetRefUpdate = useRef<ActionSheetRef>(null);
  const handleActionSheetClose = () => {
    actionSheetRef.current?.hide();
  };
  const handleActionSheetOpen = () => {
    actionSheetRef.current?.show();
  };
  const handleActionSheetCloseUpdate = () => {
    actionSheetRefUpdate.current?.hide();
  };
  const handleActionSheetOpenUpdate = () => {
    actionSheetRefUpdate.current?.show();
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.datauser}>Data User</Text>
        <View style={styles.textcontainer}>
          <View>
            <Text style={styles.textdetails}>FirstName : </Text>
          </View>
          <View>
            <Text style={styles.text}>{data?.firstname}</Text>
          </View>
        </View>
        <View style={styles.textcontainer}>
          <View>
            <Text style={styles.textdetails}>LastName : </Text>
          </View>
          <View>
            <Text style={styles.text}>{data?.lastname}</Text>
          </View>
        </View>
        <View style={styles.textcontainer}>
          <View>
            <Text style={styles.textdetails}>Age : </Text>
          </View>
          <View>
            <Text style={styles.text}>{data?.age}</Text>
          </View>
        </View>
        <View style={styles.textcontainer}>
          <View>
            <Text style={styles.textdetails}>Work : </Text>
          </View>
          <View>
            <Text style={styles.text}>{data?.work}</Text>
          </View>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={handleActionSheetOpen}>
            <Text style={styles.buttondelete}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleActionSheetOpenUpdate}>
            <Text style={styles.buttonupdate}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
      <DeleteModal
        actionSheetRef={actionSheetRef}
        handleActionSheetClose={handleActionSheetClose}
        id={id as string}
      />
      <UpdateModal updateActionSheetRef={actionSheetRefUpdate} user={data} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  datauser: {
    fontSize: 25,
    fontWeight: "semibold",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
  },

  card: {
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 20,
    width: "80%",
  },
  textcontainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  textdetails: {
    fontSize: 18,
    fontWeight: "400",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6a6a6a",
  },
  buttoncontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexDirection: "row",
    marginTop: 20,
  },
  buttondelete: {
    backgroundColor: "#c80000",
    color: "#fff",
    padding: 8,
  },
  buttonupdate: {
    backgroundColor: "#d9d600",
    color: "#000",
    padding: 8,
  },
});

export default DetailsScreen;
