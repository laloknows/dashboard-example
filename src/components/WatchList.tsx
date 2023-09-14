import { FunctionComponent } from "react";
import styled from "styled-components";

const WatchList1 = styled.div`
  position: relative;
  font-weight: 600;
`;
const IcExpandMore24px1Icon = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ViewAllParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  text-align: right;
  font-size: var(--size-14-size-14-semibold-size);
  color: var(--secondary-color);
`;
const Top1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Type = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  width: 100px;
  flex-shrink: 0;
`;
const TypeParent = styled.div`
  width: 343px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
`;
const Index1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-xs);
  color: var(--text-color-text-3);
`;
const Image8Icon = styled.img`
  position: relative;
  width: 47.3px;
  height: 30px;
  object-fit: cover;
`;
const Image8Wrapper = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--darkish-color-dark-2);
  width: 59.13px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Aapl = styled.div`
  position: relative;
  font-weight: 500;
`;
const AppleInc = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--text-color-text-2);
`;
const AaplParent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const FrameGroup = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;
const Stock = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 100px;
  flex-shrink: 0;
`;
const Div = styled.div`
  position: relative;
  font-weight: 600;
  color: var(--text-color-pure-white);
  display: inline-block;
  width: 100px;
  flex-shrink: 0;
`;
const StockParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: var(--text-color-text-3);
`;
const FrameParent = styled.div`
  align-self: stretch;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Main = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--size-14-size-14-semibold-size);
`;
const RecentTransactionRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--darkish-color-dark-bg);
  border: 1px solid var(--darkish-color-dark-2);
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl) var(--padding-lgi) var(--padding-xl)
    var(--padding-6xl);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--extra-font-size-18-semibold-size);
  color: var(--text-color-pure-white);
  font-family: var(--extra-font-size-18-semibold);
`;

const WatchList: FunctionComponent = () => {
  return (
    <RecentTransactionRoot>
      <Top1>
        <WatchList1>Watch List</WatchList1>
        <ViewAllParent>
          <WatchList1>View All</WatchList1>
          <IcExpandMore24px1Icon alt="" src="/icexpandmore24px-1.svg" />
        </ViewAllParent>
      </Top1>
      <Index1>
        <WatchList1>Ticker/Name</WatchList1>
        <TypeParent>
          <Type>TYPE</Type>
          <Type>AMOUNT</Type>
          <Type>DATE</Type>
        </TypeParent>
      </Index1>
      <Main>
        <FrameParent>
          <FrameGroup>
            <Image8Wrapper>
              <Image8Icon alt="" src="/image-8@2x.png" />
            </Image8Wrapper>
            <AaplParent>
              <Aapl>AAPL</Aapl>
              <AppleInc>Apple. Inc</AppleInc>
            </AaplParent>
          </FrameGroup>
          <StockParent>
            <Stock>Stock</Stock>
            <Div>$420.84</Div>
            <Stock>14 Apr 2022</Stock>
          </StockParent>
        </FrameParent>
      </Main>
    </RecentTransactionRoot>
  );
};

export default WatchList;
