import {Text, View} from "react-native";
import {useEffect} from "react";
import homeStyle from "../../styles/home/homeStyle";

const Home = ({ navigation }) => {

    return (
        <View style={homeStyle.container}>
            <View>
                <Text>
                    Detecting Token, Please Wait.
                </Text>
            </View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;