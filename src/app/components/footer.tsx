"use client";

export function Footer() {
  return (
    <footer>
      <img className="logo" src={`${process.env.BASE_PATH}/logo-footer.svg`} />
      <div className="social-links">
        <a href="https://wa.me/+5551995142689" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={`${process.env.BASE_PATH}/whats.svg`} />
        </a>
        <a href="mailto:ericoloewe@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={`${process.env.BASE_PATH}/email.svg`} />
        </a>
        <a href="https://github.com/loewesolucoes" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={`${process.env.BASE_PATH}/github.svg`} />
        </a>
      </div>
    </footer>
  )
}

