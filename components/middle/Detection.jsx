import {Text, View} from "react-native";
import {useEffect} from "react";
import homeStyle from "../../styles/home/HomeStyle";
import {GetItem} from "../storage/Storage";

const Detection = ({ navigation }) => {

    useEffect(() => {
        async function wait(){
            return await GetItem();
        }
        wait().then((res) => {
            if(res !== null){
                navigation.navigate('Home');
            }else{
                navigation.navigate('InputToken');
            }
        });
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