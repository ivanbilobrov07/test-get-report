import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./Container";
import { Main } from "./Layout.styled";
// import { Spinner } from "components/Spinner";

export const Layout = () => {
  return (
    <Main>
      <Container>
        {/* <Suspense fallback={<Spinner position="center" />}> */}
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </Main>
  );
};
