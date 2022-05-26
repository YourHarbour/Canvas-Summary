import {Text, View} from "react-native";
import {useEffect} from "react";
import homeStyle from "../../styles/home/homeStyle";

const Detection = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('InputToken')
    },[])

    return (
        <View style={homeStyle.container}>
            <View>
                <Text>
                    Detecting Token, Please Wait.
                </Text>
            </View>
        </View>
    )
}

export default Detection;