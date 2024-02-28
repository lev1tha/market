import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faGithub,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

import "../App.css";

function Authentication() {

    

  return (
    <div className="body">
      <div className="container_auth">
        <div className="form">
          <div className="left sign-in">
            <h1>Sign Up</h1>
            <div className="icons">
              <a href="">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faVk} />
              </a>
            </div>
          </div>
          <div className="formInputs">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
        <div className="left_sider_about">
          <h1>Авторизуйся и воплоти мечту</h1>
          <div className="text_about_sider">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              accusantium ipsa asperiores iusto error, in reiciendis provident,
              optio impedit saepe voluptate magni minima dolores corrupti
              itaque, facilis obcaecati eius amet?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
