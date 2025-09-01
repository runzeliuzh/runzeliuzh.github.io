import React from 'react';

const classes = {
  wrapper: 'p-4 relative max-w-screen-xl xs:p-8 md:p-12 lg:p-16',
  outerWrapper: 'relative bg-gray-50 min-h-screen',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block opacity-20',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <svg
        className={classes.svg}
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="#edf2f7"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
      <div className={classes.wrapper}>
        {children}
        {/* Attribution Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Built with{' '}
            <a
              href="https://github.com/RyanFitzgerald/devfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Devfolio
            </a>{' '}
            by{' '}
            <a
              href="https://github.com/RyanFitzgerald"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Ryan Fitzgerald
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
