import React from "react";
import { Router, Scene } from "react-native-router-flux";
import ChatComponent from "../components/chats/ChatComponent";
import ForwardedListComponent from "../components/forwarded-list/ForwardedListComponent";

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
        <Scene
          key="forwardedList"
          component={ForwardedListComponent}
          title="Forwarded List"
          hideNavBar
          hideTabBar
        />
      </Scene>
    </Router>
  );
};

export default Routes;
