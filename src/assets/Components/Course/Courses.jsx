/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Course from "./Course";
import { useState } from "react";

const Courses = ({handelCourseSelect}) => {

   const [courses,setCourses] =useState ([])

   
    useEffect (() => {
        fetch ('Courses.json')
        .then (res => res.json ())
        .then (data => setCourses(data));
    },[])

  return (
        <div className="grid grid-cols-3 gap-4">
           {courses.map (course => <Course key={course.id}
           course = {course}
           handelCourseSelect ={handelCourseSelect}
           ></Course>)}
            
        </div>
    );
};

export default Courses;