import React from "react";
import { Button, Footer, Row, Text } from "native-base";
import styles from "./Style";
import { Actions } from "react-native-router-flux";

function ForwardedFooter() {
  return (
    <Footer>
      <Row style={{ marginLeft: 20 }}>
        <Button style={styles.cancelButton} onPress={() => Actions.pop()}>
          <Text style={{ color: "#000000" }}>Cancel</Text>
        </Button>
      </Row>
    </Footer>
  );
}

export default ForwardedFooter;
