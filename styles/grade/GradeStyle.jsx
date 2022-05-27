import { StyleSheet } from 'react-native';
const GradeStyle = StyleSheet.create({
    singleGradeContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        width:'90%',
        marginBottom:10,
        height:100,
        borderRadius:5,
        overflow:'hidden'
    },
    assignmentName:{
        flex:1,
        backgroundColor:'#e64626',
        width:'100%',
    },
    assignmentGrade:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        backgroundColor:'#2d3b45',
        width:'100%',
    },
    assignmentText:{
        color:'#fff',
        fontSize:18,
        margin:10
    },
    gradeContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
        marginTop:'5%',
        marginBottom:'5%',
    },
    recentGradeContainer:{
        flex:1,
        width: '100%',
    }
})

export default GradeStyle;