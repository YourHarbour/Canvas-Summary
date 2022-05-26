import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import InputToken from "./components/inputToken/InputToken";
import Home from "./components/home/Home";
import Detection from "./components/middle/Detection";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Detection'}>
        <Stack.Screen name={'Home'} component={Home} options={{title:'Home'}}/>
        <Stack.Screen
            name="InputToken"
            component={InputToken}
            options={{ title: 'Input Your Token', gestureEnabled:false, headerBackVisible: false}}
        />
          <Stack.Screen name={'Detection'} component={Detection} options={{title:'Detection'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
