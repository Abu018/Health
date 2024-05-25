import React, { useEffect } from "react";
import "./Home.scss";

export const Home = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("visible");
      }, index * 100); // Adjust the delay time as needed
    });
  }, []);

  const title = "Welcome to Health Mudraa.";

  const getLetters = (word) => {
    return word.split("").map((letter, index) => (
      <span key={index} className="letter">
        {letter}
      </span>
    ));
  };

  return (
    <div className="main-container">
      <div className="Home">
        <img src="../public/1.png" alt="Doctor Login" />
        <h3>
          {title.split(" ").map((word, index) => (
            <div key={index} className="word">
              {getLetters(word)}&nbsp;
            </div>
          ))}
        </h3>
        <div className="text">
          <p className="para">
            Welcome to HealthMudraa, your trusted partner in healthcare. Our
            platform is designed to bridge the gap between patients and
            healthcare providers, offering seamless access to medical services
            and resources. At HealthMudraa, we prioritize patient care by
            integrating advanced technology with compassionate healthcare
            practices. Our team of experienced doctors and healthcare
            professionals is committed to delivering personalized and efficient
            care to meet the diverse needs of our patients. Whether you are
            looking for specialist consultations, routine check-ups, or health
            management solutions, HealthMudraa is here to ensure you receive the
            highest quality of care in a convenient and accessible manner.
          </p>
        </div>
      </div>
    </div>
  );
};
