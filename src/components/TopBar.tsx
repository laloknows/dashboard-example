import { FunctionComponent } from "react";
import styled from "styled-components";

const Dashboard1 = styled.div`
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Search11Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-26xl);
`;
const NameavaterChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const NicolasAguirre = styled.div`
  position: relative;
  font-weight: 600;
`;
const Nameavater = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const DropdownIcon = styled.img`
  position: relative;
  width: 17px;
  height: 17px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Name1 = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--darkish-color-dark-1);
  display: flex;
  flex-direction: row;
  padding: var(--padding-7xs) var(--padding-mini) var(--padding-7xs)
    var(--padding-6xs);
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-22xl);
`;
const TopBar1 = styled.div`
  width: 353px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--size-14-size-14-semibold-size);
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;
const TopBarRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--text-color-pure-white);
  font-family: var(--extra-font-size-18-semibold);
`;

const TopBar: FunctionComponent = () => {
  return (
    <TopBarRoot>
      <Dashboard1>Dashboard</Dashboard1>
      <TopBar1>
        <Icons>
          <Search11Icon alt="" src="/search1-1.svg" />
          <Search11Icon alt="" src="/notificationbing5-1.svg" />
        </Icons>
        <Name1>
          <Nameavater>
            <NameavaterChild alt="" src="/ellipse-1@2x.png" />
            <NicolasAguirre>Nicolas Aguirre</NicolasAguirre>
          </Nameavater>
          <DropdownIcon alt="" src="/dropdown.svg" />
        </Name1>
      </TopBar1>
    </TopBarRoot>
  );
};

export default TopBar;
