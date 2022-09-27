import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  main: {
    flex: 1,
    backgroundColor: "#F2621A",
    paddingHorizontal: "10%",
    paddingVertical: "50%",
  },
  camera: {
    borderRadius: 50,
    flex: 1,
    overflow: "hidden",
  },
  bottomBar: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: "#189EF1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default style;
