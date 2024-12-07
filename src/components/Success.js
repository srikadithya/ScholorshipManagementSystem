import React from "react";
import "./Success.css";
import s1 from '../assets/Successstories1.jpg';
import s2 from '../assets/Successstories2.jpg';
import s3 from '../assets/Successstories3.jpg';

const ScholarshipStories = () => {
  const stories = [
    {
      title: "From Poverty to Harvard",
      description:
        "Alina Rai grew up in a small rural town and, with a fully-funded scholarship, attended Harvard University. Now, she runs a nonprofit focused on education.",
      image: s1, // Local image
    },
    {
      title: "Empowering Women in STEM",
      description:
        "Lana Del, from a conservative background, pursued engineering with the help of a women-focused STEM scholarship. She now mentors aspiring tech professionals.",
      image: s2, // Local image
    },
    {
      title: "Making Dreams Possible with Sports Scholarships",
      description:
        "George Foreman, a talented athlete, earned a sports scholarship to a U.S. university and now manages a sports academy for young athletes.",
      image: s3, // Local image
    },
    
  ];

  return (
    <div className="stories-container">
      <h1 className="stories-title">Scholarship Success Stories</h1>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img
              src={story.image}
              alt={story.title}
              className="story-image"
            />
            <h2 className="story-title">{story.title}</h2>
            <p className="story-description">{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipStories;
