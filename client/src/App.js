import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/DashBoard";
import { PrivateRoute } from "./route/PrivateRoute";
import FeeAndContributionList from "./pages/GetFeeAndContributionPages/feeAndContributionList";
import CreateHouseholdFeeList from "./pages/GetFeeAndContributionPages/CreateHouseholdFeeList";
import FeeHouseholdList from "./pages/GetFeeAndContributionPages/FeeHouseholdList";
import FeeContribution from "./pages/FeeManager/FeeContribution";
import FeeRecurring from "./pages/FeeManager/FeeRecurring";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute element={<Dashboard />} />}
          ></Route>
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          ></Route>
          {/*get fee and contribution management*/}
          <Route
            path="/fee-contribution"
            element={<PrivateRoute element={<FeeContribution />} />}
          ></Route>
          <Route
            path="/fee-recurring"
            element={<PrivateRoute element={<FeeRecurring />} />}
          ></Route>
          <Route
            path="/GetFACMana"
            element={<PrivateRoute element={<FeeAndContributionList />} />}
          ></Route>
          <Route
            path="/HouseholdFeeList/create"
            element={
              <PrivateRoute element={<CreateHouseholdFeeList />}></PrivateRoute>
            }
          ></Route>
          <Route
            path="/HouseholdFeeList/:id"
            element={
              <PrivateRoute element={<FeeHouseholdList />}></PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
