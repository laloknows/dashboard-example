import { FunctionComponent } from "react";
import DataCard from "./DataCard";
import styled from "styled-components";

const CardsRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
  text-align: left;
  font-size: var(--size-14-size-14-semibold-size);
  color: var(--text-color-text-2);
  font-family: var(--extra-font-size-18-semibold);
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const DataCards: FunctionComponent = () => {
  return (
    <CardsRoot>
      <DataCard icon="/icon.svg" netWorth="Net Worth" prop="$524" />
      <DataCard
        totalBalanceBackgroundColor="#201e34"
        icon="/icon1.svg"
        totalBalanceJustifyContent="center"
        netWorth="Spending"
        prop="$250"
      />
      <DataCard
        totalBalanceBackgroundColor="#201e34"
        icon="/icon2.svg"
        totalBalanceJustifyContent="center"
        netWorth="Saved"
        prop="$550"
      />
    </CardsRoot>
  );
};

export default DataCards;
