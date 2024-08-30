import React from "react";
import "./About.css";
import Footer from "../../Footer.jsx";

const About = () => {
  return (
    <div className="k">
      <div className="abt-container">
        {/* About Us Section */}
        <div className="intro-section">
          <h1 className="abt-title">ABOUT US</h1>
          <p className="subtitle">
            OUR COMMITMENT TO A CLEANER, GREENER MINING INDUSTRY
          </p>
        </div>

        {/* Mission & Image Section */}
        <div className="mission-image-section">
          <div className="mission-card">
            <h2 className="card-title">Our Mission</h2>
            <p className="card-text">
              Our mission is to transform how coal mines approach carbon neutrality by providing an interactive,
              user-friendly web-based application that seamlessly integrates emission quantification, strategic reduction
              planning, and sustainability tracking. We aim to empower mine operators with intuitive tools to accurately measure
              and analyze their carbon footprint across various mining activities, including excavation, transportation, and equipment usage.
              Our application not only estimates emissions but also offers simulations for adopting clean technologies, such as electric vehicles
              and renewable energy sources, and evaluates the impact of afforestation and other carbon offset strategies. By providing clear,
              data-driven insights through dynamic visualizations and customizable reports, we support mines in identifying effective pathways
              to reduce their carbon footprint. This approach ensures transparency, aids in making informed decisions, and fosters
              cost-effective operational improvements. Ultimately, our goal is to assist coal mines in aligning with
              India’s ambitious climate goals, contributing to a sustainable future while navigating the complex
              balance between energy needs and environmental responsibility.
            </p>
          </div>
          <div className="mission-image">
            <img src="/img5.jpeg" alt="aboutImage" className="about-img" />
          </div>
        </div>

        {/* Image & Values Section */}
        <div className="values-image-section">
          <div className="values-image">
            <img src="/img3.jpeg" alt="aboutImage" className="about-img" />
          </div>
          <div className="values-card">
            <h2 className="card-title">Our Values</h2>
            <p className="card-text">
              At the heart of our mission are values that drive us to create a positive impact
              on the environment and support our users in their journey toward carbon neutrality.
              We are committed to sustainability, prioritizing solutions that reduce environmental impact
              and advance climate goals. Transparency is fundamental to our approach, ensuring that users
              have clear, accessible insights into their carbon footprint and the effectiveness of their reduction
              strategies. We value innovation, continually evolving our technology to incorporate the latest advancements
              and provide cutting-edge tools that meet the dynamic needs of coal mines. User empowerment is central to our
              design, focusing on delivering an intuitive, user-friendly experience that enables operators to make informed
              decisions and implement effective strategies. Our commitment to collaboration fosters strong partnerships with
              stakeholders, ensuring that our solutions align with industry standards and contribute to collective environmental
              progress. Through these values, we strive to build trust and drive meaningful change in the journey toward
              a more sustainable future.
            </p>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="info-section">
          <div className="info-text-wrapper">
            <p className="section-text">
              A carbon calculator is a tool designed to estimate the amount of carbon dioxide (CO2) emissions produced by an individual,
              organization, or activity. It helps users understand their carbon footprint, which is a measure of the total greenhouse gases they are
              responsible for emitting, directly or indirectly. The ultimate goal of a carbon calculator is to raise awareness about carbon emissions and
              encourage actions to reduce them.
              By quantifying the total greenhouse gases emitted—both directly and indirectly—a carbon calculator provides a comprehensive measure of one's carbon footprint. This insight is crucial for understanding the environmental impact associated with various behaviors and operations. The ultimate goal of a carbon calculator is not only to raise awareness about carbon emissions but also to drive meaningful change.
              By offering users a clearer picture of their carbon impact, the tool encourages them to adopt strategies and practices that reduce their emissions. Whether it's through optimizing energy use, investing in cleaner technologies, or supporting carbon offset initiatives, a carbon calculator serves as a catalyst for environmental responsibility. In essence, it empowers individuals and organizations to make informed decisions and take actionable steps towards a more sustainable and climate-conscious future.
            </p>
            <p className="section-text">
              Users provide information related to their activities or operations, including excavation tools, electric tools, coal amount, reduction percentage, hours worked, fuel consumption, and more. The calculator then displays individual or total monthly emissions through graphical representations, providing insights and recommendations for reducing their carbon footprint.
            </p>
            <p className="section-text">
              By providing personalized insights, actionable recommendations, and tools for tracking and reducing their carbon footprint, this software can empower individuals to make informed choices and contribute to broader environmental sustainability efforts. Our website is designed to help you achieve carbon neutrality by suggesting cost-effective measures based on the information you provide. By analyzing your inputs, such as energy usage and operational details, the site offers practical recommendations that help reduce your carbon footprint while keeping costs in check. The goal is to provide you with affordable, actionable strategies to minimize your environmental impact and move towards a more sustainable future efficiently.
            </p>
          </div>
          <h2 className="info-section-title">
            MORE FEATURES COMING SOON..
          </h2>
        </div>


        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text section-text1">
            Have questions or want to get in touch? Feel free to reach out to us
            at <a href="mailto:contactus@carbonmitra.com">contactus@carbonmitra.com</a>.
          </p>
        </div>

        {/* Footer Section */}
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;