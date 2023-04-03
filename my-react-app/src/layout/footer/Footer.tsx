import React, { FunctionComponent } from 'react';
import githubLogo from '../../assets/icons/github-mark-white.svg';
import RSSLogo from '../../assets/icons/rs_school.svg';
import discordLogo from '../../assets/icons/icon_clyde_white_RGB.svg';

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <a
          href="https://github.com/aleksa-mnk"
          className="footer__git"
          target="_blank"
          rel="noopener noreferrer"
          title="View Aleksa Mankevich's GitHub profile"
        >
          <img className="footer__git--img" src={githubLogo} alt="GitHub Logo" />
        </a>
        <a
          href="https://discordapp.com/users/838156720391454751"
          className="footer__ds"
          target="_blank"
          rel="noopener noreferrer"
          title="View Aleksa Mankevich's Discord"
        >
          <img className="footer__ds--img" src={discordLogo} alt="Discord Logo" />
        </a>
      </div>
      <a className="footer__href" href="https://rs.school/">
        <img className="footer__rs" src={RSSLogo} alt="RS School Logo" />
      </a>
      <p className="footer__about">© React-forms 2023</p>
    </footer>
  );
};

export default Footer;
