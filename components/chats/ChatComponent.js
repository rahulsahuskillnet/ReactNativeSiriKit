import CheckBox from "react-native-check-box";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { Container } from "native-base";

const json = {
  Chats: [
    {
      name: "Quincy Larson",
      time: "8:54 AM",
      message: "learn to code.",
      icon: "done",
      isViewed: "false",
      image: require("../../images/quincy.jpg"),
      isChecked: false,
    },
    {
      name: "Preethi Kasireddy",
      time: "11:56 AM",
      message: "viverra pede",
      icon: "done",
      isViewed: true,
      image: require("../../images/preeti.jpg"),
      isChecked: false,
    },
    {
      name: "Douglas Crockford",
      time: "1:34 AM",
      message: "vehicula consequat",
      icon: "done-all",
      isViewed: "false",
      image: require("../../images/crockford.jpg"),
      isChecked: false,
    },
    {
      name: "Andrew Clark",
      time: "2:12 AM",
      message: "vehicula",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/andrew.jpg"),
      isChecked: false,
    },
    {
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
      name: "Max Stoiber",
      time: "3:15 PM",
      message: "quis orci nullam",
      icon: "done",
      isViewed: "false",
      image: require("../../images/mxstbr.jpg"),
      isChecked: false,
    },
    {
      name: "Tobias Van Schnieder",
      time: "5:06 AM",
      message: "felis sed lacus",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/tobias.jpg"),
      isChecked: false,
    },
    {
      name: "Wes Bos",
      time: "11:28 PM",
      message: "purus aliquet at",
      icon: "done-all",
      isViewed: "false",
      image: require("../../images/wes.jpg"),
      isChecked: false,
    },
    {
      name: "Tom Occhino",
      time: "12:36 PM",
      message: "aliquam lacus morbi",
      icon: "done-all",
      isViewed: true,
      image: require("../../images/tom.jpg"),
      isChecked: false,
    },
    {
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
    return (
      <>
        <TouchableOpacity>
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
        {json.Chats.map((item, index) => {
          return (
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={item.image} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <CheckBox
                      onClick={() => {}}
                      isChecked={index < 2 ? true : false}
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
        {json.Contacts.map((item, index) => {
          return (
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={item.image} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <CheckBox
                      onClick={() => {}}
                      isChecked={index < 2 ? true : false}
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
      </>
    );
  }
}
