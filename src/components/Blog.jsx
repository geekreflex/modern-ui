import React from 'react';
import styled from 'styled-components';

import Blog1 from '../assets/blog01.png';
import Blog2 from '../assets/blog02.png';
import Blog3 from '../assets/blog03.png';
import Blog4 from '../assets/blog04.png';
import Blog5 from '../assets/blog05.png';

const posts = [Blog2, Blog3, Blog4, Blog5];

const Blog = () => {
  return (
    <BlogWrap>
      <h1 className="heading-gradient">
        A lot is happening, <br /> We are blogginh about it.
      </h1>
      <BlogPosts>
        <div className="post-current">
          <Post>
            <img src={Blog1} />
          </Post>
        </div>
        <div className="post-grid">
          {posts.map((img) => (
            <Post>
              <img src={img} />
            </Post>
          ))}
        </div>
      </BlogPosts>
    </BlogWrap>
  );
};

export default Blog;

const BlogWrap = styled.div`
  h1 {
    margin-bottom: 30px;
  }
`;
const BlogPosts = styled.div`
  display: flex;
  gap: 30px;

  .post-current {
    width: 35%;
  }

  .post-grid {
    width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

const Post = styled.div`
  background-color: ${(props) => props.theme.colors.light_blue};

  img {
    width: 100%;
  }
`;
