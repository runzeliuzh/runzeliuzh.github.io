import React from 'react';

const classes = {
  wrapper: 'block pt-6 md:pt-8 md:flex bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100',
  title: 'pb-3 md:pb-4 md:w-full md:max-w-150 md:p-0',
  heading:
    'font-semibold tracking-wider text-sm text-gray-700 leading-normal uppercase',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
