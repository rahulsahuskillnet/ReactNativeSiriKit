import React from "react";
import { LogBox } from "react-native";
import { Header, Button, Icon, Text, Item, Input, View } from "native-base";
import SearchBar from "react-native-search-bar";

import Routes from "./routes/routes";
import { StatusBar } from "expo-status-bar";

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
    this.refs.searchBar.focus();
  };

  handleSubmit = () => {
    if (this.state.searchText.length > 0) {
      alert("Search value: " + this.state.searchText);
    }
  };

  render() {
    return (
      <>
        <View
          style={{
            marginTop:
              Platform.OS == "ios" ? StatusBar.length + 50 : StatusBar.length,
          }}
        >
          <SearchBar
            ref="searchBar"
            placeholder="Search"
            onCancelButtonPress={() => alert("Cancel")}
          />
        </View>
        <Routes />
      </>
    );
  }
}
