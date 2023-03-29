import Nav from "./Nav";
import config from "./tamagui.config";
import { StytchClient, StytchProvider } from "@stytch/react-native-expo";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Theme } from "tamagui";

const stytch = new StytchClient(
  "public-token-test-a1524134-6e5a-4ec0-ac66-a94274f9f2f3"
);

export default function App() {
  return (
    <StytchProvider stytch={stytch}>
      <InnerApp />
    </StytchProvider>
  );
}

function InnerApp() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Nav />
      <StatusBar style="auto" />
    </TamaguiProvider>
  );
}
