import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#006ba6',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'alegreya-bold',
    fontSize: 26,
    color: '#FBEEEE',
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
    backgroundColor: '#FBEEEE',
    padding: 10,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 10,
    marginHorizontal: 9,
    fontFamily: 'alegreya-bold',
    fontSize: 19,
  }

})