import { UserData } from "@/components/user-data";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.home}>MOBILE C-R-U-D </Text>
      </View>
      <UserData />
      <View>
        <TouchableOpacity onPress={() => router.push("/details/create-user")}>
          <Text style={styles.buttonText}>Create </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  home: {
    fontSize: 20,
    marginTop: 10,
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
