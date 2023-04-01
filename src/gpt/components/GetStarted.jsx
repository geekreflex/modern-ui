import React from 'react';
import styled from 'styled-components';

const GetStarted = () => {
  return (
    <GetStartedWrap>
      <a href="#" className="click">
        Request Early Access to Get Started
      </a>
      <div className="cta">
        <h2>Register todday & start exploring the endless possibilities.</h2>
        <button>Get Started</button>
      </div>
    </GetStartedWrap>
  );
};

export default GetStarted;

const GetStartedWrap = styled.div`
  margin-bottom: 150px;
  padding: 40px 30px;
  border-radius: 10px;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);

  a {
    color: #000;
    margin-bottom: 10px;
    display: block;
  }

  color: #000;

  .cta {
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: #000;
    color: #fff;
    padding: 20px 35px;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    .cta {
      flex-direction: column;
      text-align: center;

      h2 {
        margin-bottom: 30px;
      }
    }
  }
`;
