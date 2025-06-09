import React from "react";
import profileImg from "../../assets/profile-img1.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Mahmoud</span> Abdelaziz
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__porfile"/>
            </div>
          </div>

          <p className="home__text">
            From Egypt. A software engineer interested in Web Development.
            Constantly working on developing my technical skills and learning
            new Software Engineering approaches to develop useful and
            high-performance web applications.
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaGithub/>
            </a>

            <a href="" className="home__social-link">
              <FiMail/>
            </a>

            <a href="" className="home__social-link">
              <FaXTwitter/>
            </a>
          </div>

          <div className="home__btns">
            <a href="" className="btn text-cs">Download CV</a>
            <a href="" className="hero__link text-cs">My Skills</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
