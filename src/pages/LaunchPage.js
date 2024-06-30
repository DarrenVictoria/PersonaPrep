import React from 'react';
import logoImage from '../assets/logo/Persona Prep Coloured.png';
import backgroundImage from '../assets/images/LaunchBG.jpg';

function LaunchPage() {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            position: relative;
          }
          .background-img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            opacity: 0.7;
            z-index: 0;
          }
          .logo-img {
            position: relative;
            width: 50%;
            opacity: 1;
            z-index: 2;
            transform: translate(50%, 0%);
          }
          .content {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -5%);
            text-align: center;
            z-index: 1;
            padding: 20px;
            border-radius: 16px;
            background-color: rgba(255, 255, 255, 0.8);
          }
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px green;
            }
            50% {
              box-shadow: 0 0 20px green;
            }
            100% {
              box-shadow: 0 0 5px green;
            }
          }
          @keyframes red-glow {
            0% {
              box-shadow: 0 0 5px red;
            }
            50% {
              box-shadow: 0 0 20px red;
            }
            100% {
              box-shadow: 0 0 5px red;
            }
          }
          button {
            background-color: transparent;
            border: 2px solid green;
            color: green;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 40px;
            margin: 4px 2px;
            transition-duration: 0.5s;
            cursor: pointer;
            border-radius: 12px;
            outline: none;
            animation: glow 2s infinite ease-in-out;
            margin-top: 20px;
          }
          button:hover {
            background-color: red;
            border-color: red;
            color: white;
            animation: red-glow 2s infinite ease-in-out;
          }
          button:active {
            background-color: red;
            box-shadow: 0 5px #666;
          }
          ol {
            list-style-type: decimal;
            padding: 0;
            line-height: 0.2;
          }
          ol li {
            display: inline-block;
            margin-right: 4px;
            font-size: 13px;
          }
        `}
      </style>
      <img src={backgroundImage} alt="Background Image" className="background-img" />
      <img src={logoImage} alt="" className="logo-img" />
      <div className="content">
        <ol>
          <li><h1>CV Builder,</h1></li>
          <li><h1>Mock Interview Simulator,</h1></li>
          <li><h1>Corporate analytical dashboard</h1></li>
        </ol>
        <p>
          Leveraging cutting-edge technology to prepare our students for
          successful careers.
        </p>
        <button onClick={() => window.location.href = 'https://personaprep.web.app/'}>Launch Now</button>
      </div>
    </div>
  );
}

export default LaunchPage;