import React from 'react';
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'

import { FaGithub   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import './home.css'

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className="home__container container">
          <div className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
