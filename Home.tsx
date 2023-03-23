import { useStytch } from "@stytch/react-native-expo";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const stytchClient = useStytch();

  const logout = useCallback(() => {
    stytchClient.session.revoke();
  }, [stytchClient]);

  return (
    <View style={styles.container}>
      <Text>Welcome home</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
