import React from "react";
import "./Card.css";

const Card = () => {
  const achievements = [
    { icon: "value_1.png", value: "500mm+", description: "Trees planted" },
    {
      icon: "value_2.png",
      value: "475,000+",
      description: "Co2 tons restored",
    },
    { icon: "value_3.png", value: "75,000+", description: "Lives changed" },
    { icon: "value_4.png", value: "300,000+", description: "Animals saved" },
    {
      icon: "value_5.png",
      value: "100,000+",
      description: "Kl of water cleaned",
    },
    { icon: "value_6.png", value: "350,000+", description: "Satisfied people" },
  ];

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="achievements-content">
          <div className="achievements-description">
            <h2 style={{ color: "#1d4343" }}>Our Values</h2>
            <h3>We have accomplished great results</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              egestas feugiat in id vitae a in dui diam diam libero purus nec
              enim dolor sed venenatis.
            </p>
            <a href="#" className="join-button">
              Join Us
            </a>
          </div>
          <div className="line"></div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div className="achievement-item" key={index}>
                <img
                  src={achievement.icon}
                  alt={achievement.description}
                  className="achievement-icon"
                />
                <div className="achievement-info">
                  <div className="achievement-value">{achievement.value}</div>
                  <div className="achievement-description">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
