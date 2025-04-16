import { StyleSheet } from "react-native";

const myStyles = StyleSheet.create({
  dropShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  smallSliderContainer: {
    height: 45,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    opacity: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    zIndex: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "80%",
    height: 47,
  },
  textInput: {
    flex: 1,
    color: "#000",
    opacity: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top", // Ensure the input expands vertically
    alignSelf: "center",
  },
  basicButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 0,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 134,
    height: 35,
  },
  basicButtonGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  basicButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default myStyles;
