import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RefObject } from "react";
import { DeleteUserHook } from "@/hooks/delete-user-data-hook";
interface ChildComponentProps {
  actionSheetRef: RefObject<ActionSheetRef>;
  handleActionSheetClose: () => void;
  id: string;
}
export const DeleteModal: React.FC<ChildComponentProps> = ({
  actionSheetRef,
  handleActionSheetClose,
  id,
}) => {
  const { handleDelete } = DeleteUserHook();
  return (
    <View>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionsheet}>
          <TouchableOpacity onPress={() => handleDelete(id)}>
            <Text style={styles.buttondelete}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleActionSheetClose}>
            <Text style={styles.buttonupdate}>No</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  actionsheet: {
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 30,
  },

  buttondelete: {
    backgroundColor: "#c80000",
    color: "#fff",
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  },
  buttonupdate: {
    backgroundColor: "#d9d600",
    color: "#000",

    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  },
});
