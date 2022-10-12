import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "5%",
    paddingVertical: "20%",
    backgroundColor: "#F2621A",
  },
  main: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "100%",
    backgroundColor: "#0DBA3E",
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  cardText: {
    color: "#ffffff",
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 36,
  },
  buttonContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  nameText: {
    margin: 5,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#189EF1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 50,
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

export default style;
