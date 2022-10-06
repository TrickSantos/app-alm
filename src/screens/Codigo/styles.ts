import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2621A",
    alignItems: "center",
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    color: "#ffffff",
    fontFamily: "RobotoCondensed_400Regular",
  },
  codeFiledRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 2,
  },
  cellText: {
    color: "#FFFFFF",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "RobotoCondensed_400Regular",
  },
  focusCell: {
    borderBottomColor: "#189EF1",
    borderBottomWidth: 2,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#189EF1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 16,
  },
});
