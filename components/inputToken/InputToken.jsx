import {Alert, Button, TextInput, View} from "react-native";
import React, {useEffect} from "react";
import InputTokenStyle from "../../styles/inputToken/InputTokenStyle";
import {ValidateUser} from "../lookUp/LookUp";
import {StoreItem} from "../storage/Storage";

const InputToken = ({ navigation }) => {
    const [token, setToken] = React.useState('');

    useEffect(() => {
        navigation.addListener('beforeRemove', (e)=> {
            e.preventDefault();
            })
    }, [navigation]);

    const validateToken = async () => {
        return await ValidateUser(token);
    }

    return (
        <View style={InputTokenStyle.container}>
            <View style={InputTokenStyle.inputView}>
                <TextInput
                    style={InputTokenStyle.input}
                    onChangeText={setToken}
                    value={token}
                    placeholder="Your Token"
                />
            </View>
            <View style={InputTokenStyle.buttonView}>
                <Button color="#e64626" onPress={()=> {
                    validateToken().then((res)=> {
                        if(res){
                            StoreItem(token).then(r => {
                                if(r){
                                    Alert.alert('Success', 'Will take you to home.', [{text:'Ok', style: "default" ,onPress:() => {navigation.navigate('Home')}}]);
                                }else{
                                    Alert.alert('Set local database error');
                                }
                            });
                        }else{
                            Alert.alert('Incorrect Token','',[{text:'Ok', style: "default" ,onPress:(e) => {}}]);
                        }
                    });
                }} title={'Go Home'} disabled={token === ''}/>
            </View>
        </View>
    )
}

export default InputToken;