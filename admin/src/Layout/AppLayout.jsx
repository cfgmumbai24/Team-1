import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../ui-components/Header";
import Sidebar from "../ui-components/Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 1rem;
  overflow: scroll;
  width: 100%;
`;

const Container = styled.div`
  max-width: 100rem;
  /* margin: 0 auto; */
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
        <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;