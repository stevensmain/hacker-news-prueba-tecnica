import { header, link, logo } from './Header.css'

const Header = () => {
  return (
    <nav className={header}>
      <img className={logo} src="/Logo.svg" alt="logo" />
      <a href="/" className={link}>
        Hacker News
      </a>
    </nav>
  )
}

export default Header
