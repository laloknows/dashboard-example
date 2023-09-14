import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type DataCardType = {
  icon?: string;
  netWorth?: string;
  prop?: string;

  /** Style props */
  totalBalanceBackgroundColor?: CSSProperties["backgroundColor"];
  totalBalanceJustifyContent?: CSSProperties["justifyContent"];
};

const Icon = styled.img`
  position: relative;
  width: 42px;
  height: 42px;
`;
const NetWorth = styled.div`
  position: relative;
`;
const B = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
  color: var(--text-color-pure-white);
`;
const TotalBalance1 = styled.div<{
  totalBalanceJustifyContent?: Property.JustifyContent;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  justify-content: ${(p) => p.totalBalanceJustifyContent};
`;
const TotalBalanceRoot = styled.div<{
  totalBalanceBackgroundColor?: Property.BackgroundColor;
}>`
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--darkish-color-dark-2);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl) var(--padding-xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mini);
  text-align: left;
  font-size: var(--size-14-size-14-semibold-size);
  color: var(--text-color-text-2);
  font-family: var(--extra-font-size-18-semibold);
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
  background-color: ${(p) => p.totalBalanceBackgroundColor};
`;

const DataCard: FunctionComponent<DataCardType> = ({
  totalBalanceBackgroundColor,
  icon,
  totalBalanceJustifyContent,
  netWorth,
  prop,
}) => {
  return (
    <TotalBalanceRoot totalBalanceBackgroundColor={totalBalanceBackgroundColor}>
      <Icon alt="" src={icon} />
      <TotalBalance1 totalBalanceJustifyContent={totalBalanceJustifyContent}>
        <NetWorth>{netWorth}</NetWorth>
        <B>{prop}</B>
      </TotalBalance1>
    </TotalBalanceRoot>
  );
};

export default DataCard;
