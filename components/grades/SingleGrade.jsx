import {View,Text, ScrollView} from "react-native";
import GradeStyle from "../../styles/grade/GradeStyle";
import {useEffect, useState} from "react";
import {GetAssignmentDetail, GetCourseDetail} from "../lookUp/LookUp";

const SingleGrade = (props) => {
    const [nameComponent,setNameComponent] = useState(<Text style={GradeStyle.assignmentText}>Fetching...</Text>);
    const [maxScore,setMaxScore] = useState(<Text style={GradeStyle.assignmentText}>Fetching...</Text>);
    useEffect(()=>{
        async function fetch(){
            let result = await GetAssignmentDetail(props.courseId, props.assignmentId);
            setMaxScore(<Text style={GradeStyle.assignmentText}> Max: {result.data["points_possible"]}</Text>);
            let courseResult = await GetCourseDetail(props.courseId);
            let courseName = courseResult.data.name;
            setNameComponent(<Text style={GradeStyle.assignmentText}>{courseName}: {result.data.name}</Text>);
        }
        fetch();
    },[])

    return(
        <View style={GradeStyle.singleGradeContainer} >
            <ScrollView style={GradeStyle.assignmentName} contentContainerStyle={{ justifyContent: 'center', alignItems:'center' }} horizontal>
                <Text style={GradeStyle.assignmentText}>
                    {nameComponent}
                </Text>
            </ScrollView>
            <View style={GradeStyle.assignmentGrade}>
                {maxScore}
                <Text style={GradeStyle.assignmentText}>
                    Your Score: {props.grade}
                </Text>
            </View>
        </View>
    )
}

export default SingleGrade;