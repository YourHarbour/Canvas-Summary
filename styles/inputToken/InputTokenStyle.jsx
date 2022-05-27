import { StyleSheet } from 'react-native';
const InputTokenStyle = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        width:'100%'
    },
    inputView:{
        alignItems:"stretch",
        justifyContent:"center",
        height: 80,
        width: 300
    },
    input:{
        flex:1,
        borderWidth: 1,
        borderRadius:15,
        padding:10
    },
    buttonView:{
        marginTop: 10,
    },

});

export default InputTokenStyle;