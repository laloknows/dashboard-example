import { FunctionComponent } from "react";
import styled from "styled-components";

const Image11IconRoot = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  height: auto;
  @media screen and (max-width: 1200px) {
    flex: 1;
    height: auto;
  }
`;

const PortfolioValueChart: FunctionComponent = () => {
  return <Image11IconRoot alt="" src="/image-11@2x.png" />;
};

export default PortfolioValueChart;
