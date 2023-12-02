import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding:0,
    margin:0,
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
  },
  main: {
    marginTop: 50,
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  eventName: {
    color: "#9966cc",
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 48,
  },
  normalText: {
    color: "#F8F8FF",
    fontSize: 18,
  },
  button: {
    color: "#F8F8FF",
    backgroundColor: "#9966cc",
    width: 180,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: '#F8F8FF', 
    paddingRight: 30,
    backgroundColor: '#9966cc', // Cor de fundo
  },
})