import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaGithub } from 'react-icons/fa'
import './style.scss'
const Admin = () => {
  return (
    
      <ContentWrapper>
        <div className="admin">
        <div className="copyright">
          <span>&#xa9;</span>
          <h5>Copyright - All reserved</h5>
        </div>
        <a href="https://github.com/Abhithakur7080/movix" className="icon">
          <FaGithub />
        </a>
        <a href="https://github.com/Abhithakur7080/movix" className="icon">Abhijeet kumar</a>
        </div>
      </ContentWrapper>
  );
};

export default Admin;
