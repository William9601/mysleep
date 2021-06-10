import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#A0DDFF',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'alegreya-bold',
    fontSize: 26,
    color: '#333',
    marginTop: 12,
    marginBottom: 6,
  },
  componentText: {
    fontFamily: 'alegreya-bold',
    fontSize: 19,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 6,
  }

})