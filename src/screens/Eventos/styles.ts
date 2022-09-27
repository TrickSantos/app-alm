import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#FFFFFF",
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 28,
  },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EDEDED",
  },
  item: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomColor: "#ABA7A7",
    borderBottomWidth: 1,
    marginBottom: 2,
  },
  itemText: {
    width: "100%",
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 28,
    color: "#ABA7A7",
  },
});

export default style;
