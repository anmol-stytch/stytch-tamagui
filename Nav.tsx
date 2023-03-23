import { useStytch, useStytchUser } from "@stytch/react-native-expo";
import Home from "./Home";
import Auth from "./Auth";

export default function Nav() {
  const user = useStytchUser();

  return user ? <Home /> : <Auth />;
}
