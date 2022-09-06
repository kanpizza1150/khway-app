import { StyleSheet } from "react-native"

export const COLORS = {
  primary: "#3A4459",
  darkPrimary: "#0f4e06",
  border: "#a9a9a9",
  background: "#E8F0FB",
  white: "#ffffff",
}
export const typo = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Prompt_700Bold",
    color: COLORS.primary,
  },
  h2: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Prompt_700Bold",
    color: COLORS.primary,
  },
  body: {
    fontFamily: "Prompt_400Regular",
    color: COLORS.primary,
  },
})

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between", backgroundColor: COLORS.background },
  bottomBarStyle: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    fontFamily: "Prompt_400Regular",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 14,
    margin: 12,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
})

export default styles
