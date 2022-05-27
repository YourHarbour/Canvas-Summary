import { StyleSheet } from 'react-native';
const HomeStyle = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginTop: '25%',
        marginBottom:'25%',
    },
    buttonView: {
        alignItems:"stretch",
        justifyContent:"center",
        height: 80,
        width:'80%',
        borderWidth:1,
        borderRadius:15,
        borderColor: '#e64626'
    }
});

export default HomeStyle;