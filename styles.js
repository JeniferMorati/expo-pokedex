import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  battleContainer: {
    width: "100%",
    zIndex: 3,
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "Col",
    bottom: 0,
    left: 0,
  },
  pokemonArenaContainer: {
    width: "90%",
    flexDirection: "row",
    maxHeight: "500px",
    overflow: "auto",
    alignItems: "center",
  },
  pokemonBattleLog: {
    fontSize: "1em",
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#e4b5d5",
    color: "#632c3b",
    textTransform: "capitalize",
    padding: 5,
  },
  pokemonBattleIcon: {
    postion: "relative",
    margin: 10,
  },
  pokemonBattleRemove: {
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DC2626",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "70px",
    height: 30,
    margin: 10,
  },
  pokemonOnBattle: {
    width: "50px",
    height: "50px",
    width: 50,
    height: 50,
    marginRight: 0,
    borderRadius: 5,
    backgroundColor: "#e96d7b",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "90%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingTop: 130,
    paddingBottom: 100,
    backgroundColor: "#f0d6e8",
  },
  pokemon: {
    flexDirection: "row",
    alignItems: "start",
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#e4b5d5",
    textTransform: "capitalize",
    borderRadius: 5,
    padding: 10,
    gap: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  coverBoxImage: {
    marginRight: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 5,
    backgroundColor: "#e96d7b",
    paddding: 25,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "#632c3b",
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: "#d997c5",
    color: "#6e3648",
    fontSize: "1.1em",
  },
  search: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    position: "fixed",
    top: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: "1.2em",
    fontWeight: 700,
    color: "#6e3648",
  },
});