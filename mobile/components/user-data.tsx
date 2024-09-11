import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { GetUserAll } from "@/hooks/get-user-all-hook";
import { router } from "expo-router";

export const UserData = () => {
  const { data } = GetUserAll();

  return (
    <View style={styles.container}>
      <View style={styles.tabletitle}>
        <View style={styles.cell}>
          <Text style={styles.titleText}>First Name</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.titleText}>Last Name</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.titleText}>Age</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.titleText}>Work</Text>
        </View>
      </View>

      <ScrollView style={styles.tabledatacontainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item._id}
            onPress={() => router.push(`/details/${item._id}`)}
          >
            <View style={styles.tablecontainer}>
              <Text style={styles.text}>{item.firstname}</Text>
              <Text style={styles.text}>{item.lastname}</Text>
              <Text style={styles.text}>{item.age}</Text>
              <Text style={styles.text}>{item.work}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 40,
  },
  tabletitle: {
    flexDirection: "row",
    gap: 2,
    backgroundColor: "#ddd",
    paddingVertical: 8,
    marginBottom: 8,
    padding: 5,
  },
  cell: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  tabledatacontainer: {
    height: "80%",
    overflow: "scroll",
  },
  tablecontainer: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
  },
});
