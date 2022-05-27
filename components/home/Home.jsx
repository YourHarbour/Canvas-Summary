import {Button, View} from "react-native";
import {useEffect} from "react";
import HomeStyle from "../../styles/home/HomeStyle";

const Home = ({ navigation }) => {

    useEffect(() => {
        navigation.addListener('beforeRemove', (e)=> {
            e.preventDefault();
        })
    }, [navigation]);
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.buttonView}>
                <Button color="#e64626" onPress={()=>{
                    navigation.navigate('RecentGrade');
                }} title={'See Recent Update Grades'}/>
            </View>
            <View style={HomeStyle.buttonView}>
                <Button color="#e64626" title={'See Enrolled Course Grades'}/>
            </View>
        </View>
    )
}

export default Home;