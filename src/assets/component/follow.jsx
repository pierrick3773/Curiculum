import "./follow.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const socialprofils = {
  github: "https://github.com/pierrick3773",
  linkedin: "https://www.linkedin.com/in/pierrick-viarde/"
};
const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>

        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}

        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}

      </ul>
      <p>Follow Me</p>
    </div>
  );
};

export { Socialicons, FaGithub, FaLinkedin }; // Exporter Socialicons, FaGithub et FaLinkedin à la fin du fichier
