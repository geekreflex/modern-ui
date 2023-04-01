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
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <BlogPosts>
        <div className="post-current">
          <Post>
            <img src={Blog1} />
            <div className="content">
              <div className="post-info">
                <span className="post-date">Sep 26, 2021</span>
                <h3>
                  GPT-3 and Open AI is the future. Let us explort how it is?
                </h3>
              </div>
              <a href="#">Read Full Article</a>
            </div>
          </Post>
        </div>
        <div className="post-grid">
          {posts.map((img) => (
            <Post>
              <img src={img} />
              <div className="content">
                <div className="post-info">
                  <span className="post-date">Sep 26, 2021</span>
                  <h3>
                    GPT-3 and Open AI is the future. Let us explort how it is?
                  </h3>
                </div>

                <a href="#">Read Full Article</a>
              </div>
            </Post>
          ))}
        </div>
      </BlogPosts>
    </BlogWrap>
  );
};

export default Blog;

const BlogWrap = styled.div`
  margin-bottom: 100px;
  h1 {
    margin-bottom: 60px;
    font-size: 50px;
  }
`;
const BlogPosts = styled.div`
  display: flex;
  gap: 40px;

  .post-current {
    width: 35%;
    display: flex;
  }

  .post-grid {
    width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    display: flex;
  }

  .content {
    background-color: ${(props) => props.theme.colors.light_blue};
    padding: 20px 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .post-info {
      margin-bottom: 40px;
    }

    .post-date {
      font-size: 12px;
      display: block;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 18px;
    }

    a {
      font-size: 14px;
      color: ${(props) => props.theme.colors.text_color1};
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
