import React from 'react';
import styled from 'styled-components';
import PossibilityImg from '../assets/possibility.png';

const Possibility = () => {
  return (
    <PossWrap>
      <div className="img-wrap">
        <img src={PossibilityImg} />
      </div>
      <div className="content">
        <a href="#" className="click blue">
          Request Early Access to Get Started
        </a>
        <h1 className="heading-gradient">
          The possibilities are <br />
          beyong your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#" className="click">
          Request Early Access to Get Started
        </a>
      </div>
    </PossWrap>
  );
};

export default Possibility;

const PossWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;

  .img-wrap {
    width: 50%;
    img {
      width: 100%;
    }
  }

  .content {
    width: 50%;
    margin-bottom: 70px;
    h1 {
      font-size: 40px;
      margin-bottom: 30px;
    }

    .blue {
      margin-bottom: 30px;
      color: ${(props) => props.theme.colors.light_blue2};
    }

    p {
      width: 470px;
      margin-bottom: 40px;
      color: ${(props) => props.theme.colors.text_color3};
    }
  }
`;
