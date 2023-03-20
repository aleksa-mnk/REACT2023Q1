import React from 'react';
import githubLogo from '../../../assets/images/git-logo.png';
const Footer = () => {
  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'a',
      {
        href: 'https://github.com/aleksa-mnk',
        className: 'footer__git',
        target: '_blank',
        rel: 'noopener noreferrer',
        title: "View Aleksa Mankevich's GitHub profile",
      },
      React.createElement('img', {
        className: 'footer__git--img',
        src: githubLogo,
        alt: 'GitHub Logo',
      }),
      React.createElement('p', { className: 'footer__about' }, 'Aleksa Mankevich')
    ),
    React.createElement(
      'a',
      { className: 'footer__href', href: 'https://rs.school/' },
      React.createElement('img', {
        className: 'footer__rs',
        src: 'https://rs.school/images/rs_school.svg',
        alt: 'RS School Logo',
      })
    ),
    React.createElement('p', { className: 'footer__about' }, '\u00A9 React-components 2023')
  );
};
export default Footer;
