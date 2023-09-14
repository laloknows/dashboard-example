import { FunctionComponent } from "react";
import DataCards from "./DataCards";
import PortfolioValueChart from "./PortfolioValueChart";
import styled from "styled-components";
import WatchList from "./WatchList";
import WalletSchedule from "./WalletSchedule";

const Image11Wrapper = styled.div`
  align-self: stretch;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const CardsGraphTransaction = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const Dashboarddata1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
  @media screen and (max-width: 1200px) {
    flex: unset;
    align-self: stretch;
  }
`;
const DashboarddataParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--size-14-size-14-semibold-size);
  color: var(--text-color-text-2);
  font-family: var(--extra-font-size-18-semibold);
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DashboardData: FunctionComponent = () => {
  return (
    <DashboarddataParentRoot>
      <Dashboarddata1>
        <CardsGraphTransaction>
          <DataCards />
          <Image11Wrapper>
            <PortfolioValueChart />
          </Image11Wrapper>
        </CardsGraphTransaction>
        <WatchList />
      </Dashboarddata1>
      <WalletSchedule />
    </DashboarddataParentRoot>
  );
};

export default DashboardData;
