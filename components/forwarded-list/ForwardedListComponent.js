import CheckBox from "react-native-check-box";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { Button, Footer, Row } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

export default class ForwardedListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: this.props.selectedChats || [],
      contacts: this.props.selectedContacts || [],
    };
  }

  render() {
    const { chats, contacts, selectedIds } = this.state;
    return (
      <React.Fragment>
        <ScrollView style={{ marginLeft: 5, marginRight: 5 }}>
          <Text style={styles.heading}>Conversations</Text>
          {chats.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.row}>
                  <View>
                    <Image source={item.image} style={styles.pic} />
                    <View style={styles.circle}></View>
                  </View>
                  <View>
                    <View style={styles.nameContainer}>
                      <Text style={styles.nameTxt}>{item.name}</Text>
                    </View>
                    <View style={styles.msgContainer}>
                      <Text style={styles.msgTxt}>{item.message}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          {chats.length === 0 && (
            <Text style={styles.subheading}>No users found.</Text>
          )}
          <Text style={styles.heading}>Contacts</Text>
          {contacts.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={styles.row}>
                  <View>
                    <Image source={item.image} style={styles.pic} />
                    <View style={styles.circle}></View>
                  </View>
                  <View>
                    <View style={styles.nameContainer}>
                      <Text style={styles.nameTxt}>{item.name}</Text>
                    </View>
                    <View style={styles.msgContainer}>
                      <Text style={styles.msgTxt}>{item.message}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          {contacts.length === 0 && (
            <Text style={styles.subheading}>No users found.</Text>
          )}
        </ScrollView>
        <Footer>
          <Row style={{ marginLeft: 20 }}>
            <Button style={styles.cancelButton} onPress={() => Actions.pop()}>
              <Text style={{ color: "#000000" }}>Cancel</Text>
            </Button>
          </Row>
        </Footer>
      </React.Fragment>
    );
  }
}
