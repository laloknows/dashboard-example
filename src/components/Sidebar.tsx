import { FunctionComponent } from "react";
import styled from "styled-components";

const ExcludeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
`;
const Maglo = styled.b`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 23px;
  flex-shrink: 0;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const DashboardIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Dashboard1 = styled.div`
  position: relative;
  font-size: var(--size-14-size-14-semibold-size);
  font-weight: 600;
  font-family: var(--extra-font-size-18-semibold);
  color: var(--text-color-text-1);
  text-align: left;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const Bar = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-mini);
  background-color: var(--primary-color);
  border-radius: var(--br-5xs);
  width: 200px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  @media screen and (max-width: 1200px) {
    width: auto;
    align-self: unset;
  }
`;
const TransactionsIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
`;
const Invoices = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const Bar1 = styled.div`
  border-radius: var(--br-5xs);
  width: 200px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-sm) var(--padding-mini);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  @media screen and (max-width: 1200px) {
    width: auto;
    align-self: unset;
  }
`;
const Option1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: var(--size-14-size-14-semibold-size);
  color: var(--text-color-text-2);
  font-family: var(--extra-font-size-18-semibold);
`;
const SidebarRoot = styled.div`
  align-self: stretch;
  background-color: var(--darkish-color-dark-shade);
  display: flex;
  flex-direction: column;
  padding: var(--padding-11xl) var(--padding-6xl) var(--padding-81xl);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--extra-font-size-18-semibold-size);
  color: var(--text-color-pure-white);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    align-items: center;
    justify-content: center;
  }
`;

const Sidebar: FunctionComponent = () => {
  return (
    <SidebarRoot>
      <Logo>
        <ExcludeIcon alt="" src="/exclude.svg" />
        <Maglo>Maglo.</Maglo>
      </Logo>
      <Main>
        <Option1>
          <Bar>
            <DashboardIcon alt="" src="/dashboard.svg" />
            <Dashboard1>Dashboard</Dashboard1>
          </Bar>
          <Bar1>
            <TransactionsIcon alt="" src="/transactions.svg" />
            <Invoices>Transactions</Invoices>
          </Bar1>
          <Bar1>
            <TransactionsIcon alt="" src="/invoices.svg" />
            <Invoices>Invoices</Invoices>
          </Bar1>
          <Bar1>
            <TransactionsIcon alt="" src="/my-wallets.svg" />
            <Invoices>My Wallets</Invoices>
          </Bar1>
          <Bar1>
            <TransactionsIcon alt="" src="/settings.svg" />
            <Invoices>Settings</Invoices>
          </Bar1>
        </Option1>
        <Option1>
          <Bar1>
            <TransactionsIcon alt="" src="/help.svg" />
            <Invoices>Help</Invoices>
          </Bar1>
          <Bar1>
            <TransactionsIcon alt="" src="/logout.svg" />
            <Invoices>Logout</Invoices>
          </Bar1>
        </Option1>
      </Main>
    </SidebarRoot>
  );
};

export default Sidebar;
