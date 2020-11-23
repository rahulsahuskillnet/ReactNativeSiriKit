import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#000000",
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 19,
    padding: 10,
  },
  buttonGrey: {
    margin: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 15,
  },
  time: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#666",
    fontSize: 12,
    marginLeft: 15,
    marginRight: 5,
  },
});
