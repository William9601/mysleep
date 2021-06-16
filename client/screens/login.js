import * as React from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Button } from 'react-native'
const googleID = require('../dotFile')

WebBrowser.maybeCompleteAuthSession()

export default function App () {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: googleID.expoClientId
  })

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response
    }
  }, [response])

  //console.log(response);

  return (
    <Button
      disabled={!request}
      title='Login'
      onPress={() => {
        promptAsync()
      }}
    />
  )
}
