import CheckBox from "react-native-check-box";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { Button, Footer, Row } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class ForwardedListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: json.Chats,
      contacts: json.Contacts,
      selectedIds: [],
    };
  }

  setChecked = (type, index, value) => {
    const { chats, contacts, selectedIds } = this.state;
    if (type === "chats") {
      let chatObj = chats[index];
      chatObj.isChecked = value;
      this.setState({ chats });
    } else {
      let contactObj = contacts[index];
      contactObj.isChecked = value;
      this.setState({ contacts });
    }
  };

  onCancle = () => {
    this.setState({ selectedIds: [] });
  };

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={item.image} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
              <CheckBox />
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.message}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { chats, contacts, selectedIds } = this.state;
    return (
      <React.Fragment>
        <ScrollView style={{ marginLeft: 5, marginRight: 5 }}>
          <TouchableOpacity onPress={() => alert("Create a group")}>
            <View style={styles.row}>
              <Image
                source={require("../../images/usergroup.png")}
                style={styles.pic}
              />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt}>Create a group</Text>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgTxt}>
                    Add some people to share the message
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.heading}>Conversations</Text>
          {chats.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.setChecked("chats", index, !item.isChecked);
                }}
              >
                <View style={styles.row}>
                  <Image source={item.image} style={styles.pic} />
                  <View>
                    <View style={styles.nameContainer}>
                      <Text style={styles.nameTxt}>{item.name}</Text>
                      <CheckBox
                        onClick={() =>
                          this.setChecked("chats", index, !item.isChecked)
                        }
                        isChecked={item.isChecked}
                        checkBoxColor={"grey"}
                        checkedCheckBoxColor={"#3366FF"}
                      />
                    </View>
                    <View style={styles.msgContainer}>
                      <Text style={styles.msgTxt}>{item.message}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          <Text style={styles.heading}>Contacts</Text>
          {contacts.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.setChecked("contacts", index, !item.isChecked);
                }}
              >
                <View style={styles.row}>
                  <Image source={item.image} style={styles.pic} />
                  <View>
                    <View style={styles.nameContainer}>
                      <Text style={styles.nameTxt}>{item.name}</Text>
                      <CheckBox
                        onClick={() =>
                          this.setChecked("contacts", index, !item.isChecked)
                        }
                        isChecked={item.isChecked}
                        checkBoxColor={"grey"}
                        checkedCheckBoxColor={"#3366FF"}
                      />
                    </View>
                    <View style={styles.msgContainer}>
                      <Text style={styles.msgTxt}>{item.message}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {selectedIds.length > 0 && (
          <Footer>
            <Row style={{ marginLeft: 20 }}>
              <Button style={styles.forwardButton}>
                <Text
                  style={{
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Forward
                </Text>
              </Button>
              <Button
                style={styles.cancelButton}
                onPress={() => this.onCancle()}
              >
                <Text style={{ color: "#000000" }}>Cancel</Text>
              </Button>
            </Row>
          </Footer>
        )}
      </React.Fragment>
    );
  }
}
