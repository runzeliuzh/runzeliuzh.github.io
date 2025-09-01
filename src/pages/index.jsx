import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
// import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
// import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionLanguages from '../components/section-languages';
import SectionEducation from '../components/section-education';
import SectionNews from '../components/section-news';
import FeaturedProjects from '../components/featured-projects';


import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const languages = get(data, 'site.siteMetadata.languages', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
       <SectionNews />
      <SectionEducation />
      <FeaturedProjects />
      {/* {projects && projects.length > 0 && (
  <SectionProjects projects={projects} />
)} */}
      {/* {projects && projects.length && <SectionProjects projects={projects} />} */}
      {/* {!noBlog && <SectionBlog posts={posts} />} */}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {languages && languages.length && <SectionLanguages languages={languages} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
          publication 
        }
        experience {
          name
          description
          link
          period
          location
          skills
        }
        skills {
          name
          description
        }
        languages {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
