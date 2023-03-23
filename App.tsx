import Nav from "./Nav";
import config from "./tamagui.config";
import { StytchClient, StytchProvider } from "@stytch/react-native-expo";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Theme } from "tamagui";

const stytch = new StytchClient("YOUR_TOKEN_HERE");

export default function App() {
  // FOR SOME REASON, COMMENT THESE TWO BLOCKS OUT AND STYTCH WORKS
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <StytchProvider stytch={stytch}>
        <Nav />
        <StatusBar style="auto" />
      </StytchProvider>
    </TamaguiProvider>
  );
}
