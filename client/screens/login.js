import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, TouchableOpacity, Text, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "791447362634-d5cqgeb6n9vgis56d0hn42t4cc1f9q02.apps.googleusercontent.com",
    
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}

// Redirect URIs
// http://localhost:19002/login/oauth2/code/google
// https://localhost:19006
// http://localhost:3006
// https://auth.expo.io/@willva/client
