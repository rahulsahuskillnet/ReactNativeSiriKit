import React from "react";
import { LogBox } from "react-native";
import {
  Header,
  Right,
  Button,
  Icon,
  Text,
  Footer,
  Row,
  Item,
  Input,
} from "native-base";
import ChatComponent from "./components/chats/ChatComponent";
import { ScrollView } from "react-native-gesture-handler";
export default class App extends React.Component {
  componentDidMount = () => {
    //To remove warning and error notifications while app is running on the simulator or the device
    LogBox.ignoreLogs(["Warning: Each", "Warning: Failed"]);
    LogBox.ignoreAllLogs(true);
  };

  render() {
    return (
      <>
        <Header searchBar noLeft>
          <Item style={{ flex: 1 }}>
            <Icon name="search" />
            <Input style={{width:600}} placeholder="Search User" />
          </Item>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView style={{ marginLeft: 5, marginRight: 5 }}>
          <ChatComponent />
        </ScrollView>
        <Footer>
          <Row style={{ marginLeft: 20 }}>
            <Button style={{ margin: 10 }}>
              <Text>Forward</Text>
            </Button>
            <Button
              style={{
                margin: 10,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#696969",
              }}
            >
              <Text style={{ color: "#585858" }}>Cancel</Text>
            </Button>
          </Row>
        </Footer>
      </>
    );
  }
}
