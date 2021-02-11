import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Desenvolvido por {" "}
          <a href="/" target="_blank">
            Álex Joubert.
          </a>
          <br />
        </Typography>
      </div>
    </div>
  )
}

export default Footer
