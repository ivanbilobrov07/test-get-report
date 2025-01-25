import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "..";
import { generateRandomBalance, MAXIMUM_CARD_BALANCE } from "~/shared";

const TransactionListPage = lazy(() => import("~/pages/TransactionListPage"));
const TransactionPage = lazy(() => import("~/pages/TransactionPage"));

export const App = () => {
  const cardBalance = generateRandomBalance({
    maxValue: MAXIMUM_CARD_BALANCE,
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<TransactionListPage cardBalance={cardBalance} />}
        />
        <Route
          path="transactions/:transaction_id"
          element={<TransactionPage />}
        />
      </Route>
    </Routes>
  );
};
