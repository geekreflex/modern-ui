import React from 'react';
import styled from 'styled-components';
import Dropbox from '../assets/dropbox.png';
import Google from '../assets/google.png';
import Shopify from '../assets/shopify.png';
import Slack from '../assets/slack.png';
import Atlassian from '../assets/atlassian.png';

const Companies = () => {
  return (
    <CompaniesWrap>
      <div className="companies">
        <img src={Google} />
        <img src={Slack} />
        <img src={Atlassian} />
        <img src={Dropbox} />
        <img src={Shopify} />
      </div>
    </CompaniesWrap>
  );
};

export default Companies;

const CompaniesWrap = styled.div`
  .companies {
    display: flex;
    justify-content: center;
    padding: 80px 0;
    gap: 50px;
    img {
    }
  }
`;
