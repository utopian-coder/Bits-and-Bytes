import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Courses.module.css";
import CourseCardWithCover from "../components/Courses/CourseCardWithCover";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/courses");
        if (data.status != "success") throw new Error("Something went wrong!");
        setCourses(data.data.courses);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={`container ${classes["course-container"]}`}>
      <h2 className='heading'>Browse All Courses</h2>
      {isLoading && <p>Loading...</p>}
      {courses.length > 0 &&
        courses.map((course) => {
          const { _id, title, summary, price, cover, instructor } = course;
          return (
            <CourseCardWithCover
              key={_id}
              id={_id}
              title={title}
              summary={summary}
              price={price}
              cover={cover}
              author={instructor.name}
            />
          );
        })}
    </main>
  );
};

export default Courses;
