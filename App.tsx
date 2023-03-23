import { StytchClient, StytchProvider } from "@stytch/react-native-expo";
import { StatusBar } from "expo-status-bar";
import Nav from "./Nav";

const stytch = new StytchClient("YOUR_TOKEN_HERE");

export default function App() {
  return (
    <StytchProvider stytch={stytch}>
      <Nav />
      <StatusBar style="auto" />
    </StytchProvider>
  );
}
