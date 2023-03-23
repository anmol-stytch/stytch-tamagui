import Auth from "./Auth";
import Home from "./Home";
import { useStytch, useStytchUser } from "@stytch/react-native-expo";

export default function Nav() {
  const user = useStytchUser();

  return user ? <Home /> : <Auth />;
}
