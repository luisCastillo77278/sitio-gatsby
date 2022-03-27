import React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinksText
} from './layout.module.css';

const Layout = ({title, children}) => {
  return (
    <div className={container}>
      <title>{title}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}>
            <Link to="/" className={navLinksText}>Home</Link>
          </li>
          <li className={navLinksItem}>
            <Link to="/about" className={navLinksText}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{title}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout