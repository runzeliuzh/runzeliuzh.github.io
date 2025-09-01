import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-3',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

// const SummaryItem = ({ name, description, link = false, internal = false }) => {
//   let linkContent;
//   if (internal) {
//     linkContent = <Link to={link}>{name}</Link>;
//   } else {
//     linkContent = <a href={link}>{name}</a>;
//   }

//   return (
//     <div className={classes.wrapper}>
//       <h3
//       //  <p
//         className={`${classes.name} ${
//           link ? 'hover:underline hover:text-black' : ''
//         }`}
//       >
//         {link ? linkContent : name}
//       </h3>
//          {/* </p> */}
//       <p className={classes.description}>{description}</p>
//     </div>
//   );
// };
const SummaryItem = ({ name, description, link = false, internal = false, actionButton = null }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <div className="flex justify-between items-start mb-2">
        <p
          className={`font-normal ${classes.name} ${
            link ? 'hover:underline hover:text-black' : ''
          }`}
        >
          {link ? linkContent : name}
        </p>
        {actionButton && (
          <div className="flex-shrink-0 ml-4">
            {actionButton}
          </div>
        )}
      </div>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
