import { useStytch } from "@stytch/react-native-expo";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Auth() {
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [methodId, setMethodId] = useState("");

  const stytch = useStytch();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Phone number" onChangeText={setPhone} />
      <Button
        title="Send code"
        onPress={async () => {
          const { method_id } = await stytch.otps.sms.loginOrCreate(phone);
          setMethodId(method_id);
        }}
      />

      <TextInput placeholder="OTP code" onChangeText={setOTP} />
      <Button
        title="Verify code"
        onPress={() => {
          stytch.otps.authenticate(otp, methodId, {
            session_duration_minutes: 129600,
          });
        }}
      />
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
