import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const classes = {
  wrapper: 'block mb-4 md:mb-6 md:flex bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 relative overflow-hidden',
  imageWrapper: 'w-full max-w-150 relative z-10',
  image: 'rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg',
  contentWrapper: 'flex-none pt-4 md:pt-1 md:flex-1 md:pl-20 relative z-10',
  name: 'text-4xl md:text-5xl text-black font-bold leading-tight hover:text-gray-800 transition-colors duration-300 cursor-pointer',
  description: 'text-gray-700 text-lg font-medium mt-2',
  list: 'mt-6 flex flex-wrap gap-3',
  item: 'inline list-none',
  link: 'inline-block px-4 py-2 font-semibold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-400 rounded-full blur-lg"></div>
      </div>
      
      <div className={classes.imageWrapper}>
        <Link to="/">
          <StaticImage
            className={classes.image}
            src="../../images/photo.jpg"
            alt={metadata?.name || "Profile Picture"}
            placeholder="dominantColor"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {/* {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )} */}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          <li className={classes.item}>
            <a 
              className={classes.link} 
              href="mailto:lirunze2526@gmail.com"
            >
              Contact Me
            </a>
          </li>
          {/* {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
