import { FunctionComponent } from "react";
import styled from "styled-components";

const Image10Icon = styled.img`
  position: relative;
  width: 354px;
  height: 322px;
  object-fit: cover;
`;
const ViewAll = styled.div`
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
  width: 79px;
  height: 18px;
  display: flex;
  flex-direction: row;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  text-align: right;
  font-size: var(--size-14-size-14-semibold-size);
  color: var(--secondary-color);
`;
const Titel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const April282022 = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--text-color-text-3);
`;
const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const NameDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 600;
  text-align: right;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const Main1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Main = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--size-14-size-14-semibold-size);
`;
const ScheduledTransfers = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const WalletScheduleRoot = styled.div`
  width: 354px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px var(--padding-20xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  text-align: left;
  font-size: var(--extra-font-size-18-semibold-size);
  color: var(--text-color-pure-white);
  font-family: var(--extra-font-size-18-semibold);
  @media screen and (max-width: 1200px) {
    align-self: stretch;
    width: auto;
  }
`;

const WalletSchedule: FunctionComponent = () => {
  return (
    <WalletScheduleRoot>
      <Image10Icon alt="" src="/image-10@2x.png" />
      <ScheduledTransfers>
        <Titel>
          <ViewAll>Scheduled Transfers</ViewAll>
          <ViewAllParent>
            <ViewAll>View All</ViewAll>
            <IcExpandMore24px1Icon alt="" src="/icexpandmore24px-11.svg" />
          </ViewAllParent>
        </Titel>
        <Main>
          <Main1>
            <FrameParent>
              <NameDateWrapper>
                <NameDate>
                  <ViewAll>MSFT</ViewAll>
                  <April282022>April 28, 2022 at 11:00</April282022>
                </NameDate>
              </NameDateWrapper>
              <Div>- $435,00</Div>
            </FrameParent>
          </Main1>
          <Main1>
            <FrameParent>
              <NameDateWrapper>
                <NameDate>
                  <ViewAll>TSLA</ViewAll>
                  <April282022>April 28, 2022 at 11:00</April282022>
                </NameDate>
              </NameDateWrapper>
              <Div>- $435,00</Div>
            </FrameParent>
          </Main1>
          <Main1>
            <FrameParent>
              <NameDateWrapper>
                <NameDate>
                  <ViewAll>META</ViewAll>
                  <April282022>April 28, 2022 at 11:00</April282022>
                </NameDate>
              </NameDateWrapper>
              <Div>- $435,00</Div>
            </FrameParent>
          </Main1>
          <Main1>
            <FrameParent>
              <NameDateWrapper>
                <NameDate>
                  <ViewAll>MSFT</ViewAll>
                  <April282022>April 28, 2022 at 11:00</April282022>
                </NameDate>
              </NameDateWrapper>
              <Div>- $435,00</Div>
            </FrameParent>
          </Main1>
        </Main>
      </ScheduledTransfers>
    </WalletScheduleRoot>
  );
};

export default WalletSchedule;
