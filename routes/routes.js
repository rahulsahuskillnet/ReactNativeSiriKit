import React from "react";
import { Router, Scene } from "react-native-router-flux";
import ChatComponent from "../components/chats/ChatComponent";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="chats"
          component={ChatComponent}
          title="Cats"
          hideNavBar
          hideTabBar
          initial
        />
        {/* <Scene
          key="gray"
          component={GrayScreen}
          title="Gray"
          hideNavBar
          hideTabBar
        /> */}
      </Scene>
    </Router>
  );
};

export default Routes;
