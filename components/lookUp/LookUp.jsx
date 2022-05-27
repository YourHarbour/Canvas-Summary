import axios from "axios";

export const ValidateUser = async (token) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await axios.get('https://canvas.sydney.edu.au/api/v1/users/self/profile').then((res) => {
        return true;
    }).catch((err) => {
        return false;
    });
}

export const GetRecentGrades = async(token) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await axios.get('https://canvas.sydney.edu.au/api/v1/users/self/graded_submissions').then((res) => {
        return res;
    }).catch((err) => {
        return null;
    });
}

export const GetAssignmentDetail = async (courseId, assignmentId) => {
    let url = `https://canvas.sydney.edu.au/api/v1/courses/${courseId}/assignments/${assignmentId}`;
    return await axios.get(url).then((res) => {
        return res;
    }).catch((err) => {
        return null;
    });
}

export const GetCourseDetail = async (courseId) => {
    let url = `https://canvas.sydney.edu.au/api/v1/courses/${courseId}`;
    return await axios.get(url).then((res) => {
        return res;
    }).catch((err) => {
        return null;
    });
}