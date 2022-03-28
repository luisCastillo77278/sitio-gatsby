import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinksItem,
  navLinksText,
  siteTitle
} from './layout.module.css';

const Layout = ({title, children}) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `);

  return (
    <div className={container}>
      <title> {title} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}>
            <Link to="/" className={navLinksText}>Home</Link>
          </li>
          <li className={navLinksItem}>
            <Link to="/about" className={navLinksText}>About</Link>
          </li>
          <li>
            <Link to="/blog" className={navLinksText}>Blog</Link>
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