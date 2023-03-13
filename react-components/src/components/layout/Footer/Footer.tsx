import React, { FunctionComponent } from 'react';
import githubLogo from '../../../assets/images/git-logo.png';

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/aleksa-mnk"
               className="footer__git"
               target="_blank"
               rel="noopener noreferrer"
               title="View Aleksa Mankevich's GitHub profile">
                <img className="footer__git--img" src={githubLogo} alt="GitHub Logo" />
                <p className="footer__about">React-components project by Aleksa Mankevich</p>
            </a>
            <a className="footer__href" href="https://rs.school/">
                <img className="footer__rs"
                     src="https://rs.school/images/rs_school.svg"
                     alt="RS School Logo" />
            </a>
            <p className="footer__about">© React-components 2023</p>
        </footer>
    )
}

export default Footer;
