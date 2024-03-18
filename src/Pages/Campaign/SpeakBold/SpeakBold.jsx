import React from "react";
import heroBaner from "../../../assets/SpeakBold/HeroBanner.png";
import aboutImg from "../../../assets/SpeakBold/SpeakBoldAbout.png";
import speakBold from "../../../assets/SpeakBold/SpeakBold.png";
import "./SpeakBold.css";

const SpeakBold = () => {
  return (
    <div className="speak-bold-container">
      <header className="speak-bold">
        <div className="speak-bold-text">
          {/* <h1>Speak Bold</h1> */}
          <img src={speakBold} alt="" />
          <p>Unlocking the Power of Effective Communication</p>
        </div>
        <img className="speak-bold-img" src={heroBaner} alt="" />
      </header>
      <section className="speak-bold-about">
        <div className="speak-bold-about-img">
          <img src={aboutImg} alt="" />
        </div>
        <div className="speak-bold-about-text">
          <h1>About the Workshop</h1>
          <p>
            "Communication – the human connection – is the key to personal and
            career success." ~ Paul J. Meyer With this being said, here comes
            the most intriguing question: What makes you quiet all of a sudden
            when you desperately want to say something? Why does your heart skip
            a bit when you almost begin to say the very first word of your
            speech or a random presentation in front of an audience?
            Nervousness, shyness, rapid sweating, abrupt mind blankness & so
            many other attacks strike you both mentally and physically, isn’t
            it? Hence, to help you fight against these ambushes, BUCLC will be
            organizing an electrifying workshop “Speak Bold” to electrify you &
            boost you up mentally as an effective speaker as well as a better
            communicator with people from all walks of life. So what are you
            waiting for? Join us for an engaging and informative event, "Speak
            Bold," on 25th March, 2024 Together, let's explore the keys to
            effective communication and overcoming the fear of public speaking.
            Whether you're a seasoned professional or a newcomer to public
            speaking, this event offers valuable insights and practical tips to
            enhance your communication skills and boost your confidence.
            Essential details are given down below 👇🏼
          </p>
          <div className="speak-bold-about-location">
            <p>
              <span>Location:</span> To Be Announced
            </p>
          </div>
        </div>
      </section>

      <section className="speak-bold-schedule">
        <h1 className="speak-bold-schedule-title">Workshop Schedule</h1>
        <div className="speak-bold-schedule-container">
          <div className="speak-bold-schedule-item">
            <h1>First Part</h1>
            <p>Time: 12 PM - 1 PM</p>
            <p>
              Topic: Effective Communication Techniques (Networking &
              Relationship Building)
            </p>
            <p>
              Speaker: Hafizur Rahman (Farabi Hafiz), Senior News and Program
              Presenter
            </p>
          </div>
          <div className="speak-bold-schedule-item">
            <h1>
              Break
            </h1>
            <p>
            Refreshments and networking opportunity (1:00 PM - 1:10 PM)
            </p>
          </div>
          <div className="speak-bold-schedule-item">
            <h1> Second Part</h1>
            <p>Time: 1:10 PM - 2:10 PM</p>
            <p>Topic: Overcoming the Fear of Public Speaking</p>
            <p>Speaker: Sadman Sadik, Author & Educator</p>
          </div>
          <div className="speak-bold-schedule-item">
            <p>Q&A Session: 2:10 PM - 2:25 PM</p>
            <p>Photo-taking session: 2:25 PM - 2:30 PM</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h1 className="footer-title">
            BUCLC - BRAC University Communication & Language Club
          </h1>
          <p className="footer-description">
            BUCLC's sole purpose is to promote the use and practice of Language
            and to build strong Communication
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/BUCLC" className="social-link">
              <img src="https://i.ibb.co/y4XVzfx/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/bracuclc/"
              className="social-link"
            >
              <img
                src="https://i.ibb.co/jbqHb3p/instagram.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/brac-university-communication-and-language-club/"
              className="social-link"
            >
              <img src="https://i.ibb.co/Vwr7QG8/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpeakBold;
