import React from "react";
import styled from "styled-components";

const PostList = ({ posts }) => {
  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
    const { title, date, description, tujuan, social_image } = frontmatter;
    const { slug } = fields;
    const socialImage = social_image ? frontmatter.social_image.absolutePath : "";

    return (
      <PostListItem
        key={slug}
        title={title}
        tujuan={tujuan}
        socialImage={socialImage}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <StyledPostList>{PostList}</StyledPostList>;
};

export default PostList;

const MyIcon = styled.img`
  width: 100%;
`;


const PostListItem = ({
  title,
  tujuan,
  socialImage,
  // date,
  // timeToRead,
  // tags,
  excerpt,
  description,
  // slug,
}) => {
  return (
    <StyledPostListItem>

      <PostListTitle>{title}</PostListTitle>

      
      <MyIcon src={socialImage} />


      <a href={tujuan} target="_blank" rel="noreferrer" data-umami-event={`survey-${title.replace(/ +/g, '-')}`}>
        <PostListExcerpt
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
      </a>
    </StyledPostListItem>
  );
};


const StyledPostList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(28ch, 1fr));

  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const StyledPostListItem = styled.li`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
  
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostListExcerpt = styled.p`
  padding-top: var(--size-400);
`;

// const PostListMeta = styled.div`
//   margin-top: 2rem;

//   font-size: var(--size-300);
//   display: flex;
//   justify-content: space-between;
// `;
