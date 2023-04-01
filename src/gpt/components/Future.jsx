import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

const items = [
  {
    title: 'Impoving and distrusts instantly',
    content:
      'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    content:
      'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or arm nothing',
    content:
      'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    content:
      'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  },
];

const Future = () => {
  return (
    <FutureWrap>
      <div className="left">
        <h2 className="heading-gradient">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <a href="#" className="click">
          Request Early Access to Get Started
        </a>
      </div>
      <div className="right">
        {items.map((item, index) => (
          <div className="future-item" key={index}>
            <Heading text={item.title} size={20} gap={5} />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </FutureWrap>
  );
};

export default Future;

const FutureWrap = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  gap: 100px;

  .left {
    width: 35%;

    h2 {
      font-size: 35px;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .future-item {
      display: flex;
      gap: 60px;

      h2 {
        width: 200px;
      }

      p {
        color: ${(props) => props.theme.colors.text_color3};
        flex: 1;
        font-size: 15px;
      }
    }
  }
`;
