import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../components/Courses/CourseDetails";
import Footer from "../../components/Footer/Footer";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/courses/${id}`);
        if (data.status != "success") throw new Error("Something went wrong!");
        setCourseDetails(data.data.course);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <main className={`container`}>
        {isLoading && <p>Loading...</p>}
        {courseDetails && <CourseDetails course={courseDetails} />}
      </main>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
