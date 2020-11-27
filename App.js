import React from "react";
import { LogBox } from "react-native";
import { Header, Button, Icon, Text, Item, Input } from "native-base";
import Routes from "./routes/routes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  componentDidMount = () => {
    //To remove warning and error notifications while app is running on the simulator or the device
    LogBox.ignoreLogs(["Warning: Each", "Warning: Failed"]);
    LogBox.ignoreAllLogs(true);
  };

  handleSearch = (e) => {
    this.setState({ searchText: e });
  };

  handleSubmit = () => {
    if (this.state.searchText.length > 0) {
      alert("Search value: " + this.state.searchText);
    }
  };

  render() {
    return (
      <>
        <Header searchBar rounded autoCorrect={false}>
          <Item style={{ backgroundColor: "#fff" }}>
            <Icon name="ios-search" onPress={() => this.handleSubmit()} />
            <Input
              placeholder="Search"
              onChangeText={(e) => this.handleSearch(e)}
            />
          </Item>
          <Button transparent onPress={() => alert("Cancel pressed")}>
            <Text>Cancel</Text>
          </Button>
        </Header>
        <Routes />
      </>
    );
  }
}
