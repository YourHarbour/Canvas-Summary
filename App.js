import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import InputToken from "./components/inputToken/InputToken";
import Home from "./components/home/Home";
import Detection from "./components/middle/Detection";
import {RemoveItem} from "./components/storage/Storage";
import RecentGrade from "./components/grades/RecentGrade";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Detection'}>
        <Stack.Screen name={'Home'} component={Home} options={ ({navigation, route}) => ({title:'Home', gestureEnabled:false, headerBackVisible: false,
            headerStyle: {
                backgroundColor: '#e64626',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <Button
                    onPress={() => RemoveItem().then(r => {
                        if(r === 'Success') {
                            Alert.alert(r,'',[{text:'Ok', style: "default" ,onPress:() => {}}]);
                        }else{
                            Alert.alert(r);
                        }
                    })}
                    title="Remove Token"
                    color="#2d3b45"
                />
            ),
        })} />
        <Stack.Screen
            name="InputToken"
            component={InputToken}
            options={{ title: 'Input Your Token', gestureEnabled:false, headerBackVisible: false, headerStyle: {
                    backgroundColor: '#e64626',
                }, headerTintColor: '#fff',
        }}
        />
          <Stack.Screen name={'Detection'} component={Detection} options={{title:'Detection', headerStyle: {
                  backgroundColor: '#e64626',
              }, headerTintColor: '#fff',
          }}/>
          <Stack.Screen name={'RecentGrade'} component={RecentGrade} options={{title:'Recent Update Grades', headerStyle: {
                  backgroundColor: '#e64626',
              },headerTintColor: '#fff',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
