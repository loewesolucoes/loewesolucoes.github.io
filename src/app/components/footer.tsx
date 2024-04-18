"use client";

import LogoFooter from '../../../public/logo-footer.svg'
import WhatsIcon from '../../../public/whats.svg'
import EmailIcon from '../../../public/email.svg'
import GithubIcon from '../../../public/github.svg'

export function Footer() {
  return (
    <footer>
      <LogoFooter className="logo" src={`${process.env.BASE_PATH}/logo-footer.svg`} />
      <div id='contato' className="social-links">
        <a href="https://wa.me/+5551995142689" target="_blank" rel="noopener noreferrer">
          <WhatsIcon className="social-icon" src={`${process.env.BASE_PATH}/whats.svg`} />
        </a>
        <a href="mailto:ericoloewe@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon className="social-icon" src={`${process.env.BASE_PATH}/email.svg`} />
        </a>
        <a href="https://github.com/loewesolucoes" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="social-icon" src={`${process.env.BASE_PATH}/github.svg`} />
        </a>
      </div>
    </footer>
  )
}
