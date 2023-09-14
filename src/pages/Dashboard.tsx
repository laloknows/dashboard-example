import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import DashboardData from "../components/DashboardData";
import styled from "styled-components";

const Dashboardcontent = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: rgba(255, 255, 255, 0);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: var(--padding-11xl) var(--padding-20xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const DashboardRoot = styled.div`
  position: relative;
  background-color: var(--darkish-color-dark-bg);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Dashboard: FunctionComponent = () => {
  return (
    <DashboardRoot>
      <Sidebar />
      <Dashboardcontent>
        <TopBar />
        <DashboardData />
      </Dashboardcontent>
    </DashboardRoot>
  );
};

export default Dashboard;
