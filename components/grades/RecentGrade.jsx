import {View, Text, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {GetRecentGrades} from "../lookUp/LookUp";
import {GetItem} from "../storage/Storage";
import SingleGrade from "./SingleGrade";
import GradeStyle from "../../styles/grade/GradeStyle";

const RecentGrade = () => {
    const [gradeComponent,setGradeComponent] = useState(<View>
        <Text>Fetching...</Text>
    </View>)
    useEffect(()=>{
        async function fetch(){
            let token = await GetItem();
            return await GetRecentGrades(token);
        }
        fetch().then((res)=> {
            let data = res.data;
            setGradeComponent(
                <ScrollView style={GradeStyle.recentGradeContainer} contentContainerStyle={{ justifyContent: 'center', alignItems:'center' }}>
                    {data.map((each) => {
                        let courseId = each["preview_url"].split('/')[4];
                        return (
                            <SingleGrade grade={each['score']} key={each["id"]} courseId={courseId} assignmentId={each["assignment_id"]}/>
                        )
                    })}
                </ScrollView>
            )
        });
    },[])

    return (
        <View style={GradeStyle.gradeContainer}>
            {gradeComponent}
        </View>
    )
}

export default RecentGrade;