import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainForm: {
    width: "100%",
    padding: 20,
  },
  button: {
    backgroundColor: "#189EF1",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "50%",
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 16,
  },
});

export default style;
