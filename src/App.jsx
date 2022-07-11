import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
export default function App() {

  const sizeIcons = 28;

  return (
    <div className="MainContainer">
      <div className="container">
        <div className="profile-container">
          <img src="https://github.com/luisdasilvahenrique.png" alt="" />
          <h1>Luis Henrique</h1>
          <p>Front-end Developer</p>
        </div>

        <div className="description">
          <p>
            Sou técnico de informática, atualmente estudando pela plataforma da Rocketseat.🚀
          </p>
          <span>luisenriklh1177027@gmail.com</span>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/luissh.dev/" target={"_blank"}> <FiInstagram size={sizeIcons}/> </a>
          <a href="https://www.linkedin.com/in/luís-henrique-a1426a20a/" target={"_blank"}> <FiLinkedin size={sizeIcons}/> </a>
          <a href="https://github.com/luisdasilvahenrique" target={"_blank"}> <FiGithub size={sizeIcons}/> </a>
        </div>
      </div>
    </div>
  );  
}
