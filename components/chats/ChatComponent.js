import CheckBox from "react-native-check-box";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import ChatFooter from "./ChatFooter";

const json = {
  Chats: [
    {
      id: 1,
      name: "Quincy Larson",
      time: "8:54 AM",
      message: "learn to code.",
      icon: "done",
      isViewed: "false",
      image: require("../../images/quincy.jpg"),
      isChecked: false,
    },
    {
      id: 2,
      name: "Preethi Kasireddy",
      time: "11:56 AM",
      message: "viverra pede",
      icon: "done",
      isViewed: true,
      image: require("../../images/preeti.jpg"),
      isChecked: false,
    },
    {
      id: 3,
      name: "Douglas Crockford",
      time: "1:34 AM",
      message: "vehicula consequat",
      icon: "done-all",
      isViewed: "false",
      image: require("../../images/crockford.jpg"),
      isChecked: false,
    },
    {
      id: 4,
      name: "Andrew Clark",
      time: "2:12 AM",
      message: "vehicula",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/andrew.jpg"),
      isChecked: false,
    },
    {
      id: 5,
      name: "Brendan Eich",
      time: "11:23 AM",
      message: "amet",
      icon: "done",
      isViewed: "false",
      image: require("../../images/brendan.jpg"),
      isChecked: false,
    },
  ],
  Contacts: [
    {
      id: 6,
      name: "Max Stoiber",
      time: "3:15 PM",
      message: "quis orci nullam",
      icon: "done",
      isViewed: "false",
      image: require("../../images/mxstbr.jpg"),
      isChecked: false,
    },
    {
      id: 7,
      name: "Tobias Van Schnieder",
      time: "5:06 AM",
      message: "felis sed lacus",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/tobias.jpg"),
      isChecked: false,
    },
    {
      id: 8,
      name: "Wes Bos",
      time: "11:28 PM",
      message: "purus aliquet at",
      icon: "done-all",
      isViewed: "false",
      image: require("../../images/wes.jpg"),
      isChecked: false,
    },
    {
      id: 9,
      name: "Tom Occhino",
      time: "12:36 PM",
      message: "aliquam lacus morbi",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/tom.jpg"),
      isChecked: false,
    },
    {
      id: 10,
      name: "Dan Abramov",
      time: "3:05 PM",
      message: "integer tincid",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/dan.jpg"),
      isChecked: false,
    },
  ],
};

export default class ChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: json.Chats,
      contacts: json.Contacts,
      selectedChats: [],
      selectedContacts: [],
    };
  }

  setChecked = (type, index, value) => {
    const { chats, contacts, selectedChats, selectedContacts } = this.state;
    if (type === "chats") {
      let chatObj = chats[index];
      chatObj.isChecked = value;
      if (value) {
        selectedChats.push(chatObj);
      } else {
        const index = selectedChats.indexOf(chatObj);
        if (index > -1) {
          selectedChats.splice(index, 1);
        }
      }
      this.setState({ chats, selectedChats });
    } else {
      let contactObj = contacts[index];
      contactObj.isChecked = value;
      if (value) {
        selectedContacts.push(contactObj);
      } else {
        const index = selectedContacts.indexOf(contactObj);
        if (index > -1) {
          selectedContacts.splice(index, 1);
        }
      }
      this.setState({ contacts, selectedContacts });
    }
  };

  onCancle = () => {
    const { chats, contacts } = this.state;
    this.setState({ selectedContacts: [], selectedChats: [] });
    chats.map((ob) => {
      ob.isChecked = false;
    });
    contacts.map((ob) => {
      ob.isChecked = false;
    });
    this.setState({ chats, contacts });
  };

  forwardList = () => {
    Actions.forwardedList({
      selectedChats: this.state.selectedChats,
      selectedContacts: this.state.selectedContacts,
    });
  };

  render() {
    const { chats, contacts, selectedChats, selectedContacts } = this.state;
    return (
      <React.Fragment>
        <ScrollView style={{ marginLeft: 5, marginRight: 5 }}>
          {(selectedChats.length > 1 || selectedContacts.length > 1) && (
            <TouchableOpacity onPress={() => this.forwardList()}>
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
          )}
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
                  <View>
                    <Image source={item.image} style={styles.pic} />
                    <View style={styles.circle}></View>
                  </View>
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
                  <View>
                    <Image source={item.image} style={styles.pic} />
                    <View style={styles.circle}></View>
                  </View>
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
        {(selectedChats.length > 0 || selectedContacts.length > 0) && (
          <ChatFooter
            forwardList={() => this.forwardList()}
            onCancle={() => this.onCancle()}
          />
        )}
      </React.Fragment>
    );
  }
}
