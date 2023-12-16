
import './App.css';


import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/DashBoard";
import {AdminWrap, PrivateRoute} from "./route/PrivateRoute";
import FeeAndContributionList from "./pages/GetFeeAndContributionPages/feeAndContributionList";
import CreateHouseholdFeeList from "./pages/GetFeeAndContributionPages/CreateHouseholdFeeList";
import FeeHouseholdList from "./pages/GetFeeAndContributionPages/FeeHouseholdList";
import  Statistic  from './pages/statistic/Statistic';
import CanBoManagement from './pages/GetCanBoPages/CanBoManagement';
import CanBoAdd from './pages/GetCanBoPages/CanBoAdd';
import CreatedList from "./pages/GetFeeAndContributionPages/CreatedList";
import CreateHouseholdContributionList from "./pages/GetFeeAndContributionPages/CreateHouseholdContributionList";
import ContributionHouseholdList from "./pages/GetFeeAndContributionPages/ContributionHouseholdList";
import ChangePassword from "./pages/ChangePassword";


function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<PrivateRoute element={<Dashboard/>}/>}></Route>
                  <Route path="/login" element={<SignIn/>}/>
                  <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>}/>}></Route>
                  <Route path="/changePassword" element={<PrivateRoute element={<ChangePassword/>}/>}></Route>
                  {/*get fee and contribution management*/}
                  <Route path="/GetFACMana" element={<PrivateRoute element={<FeeAndContributionList/>}/>}></Route>
                  <Route path="/GetCANBOMana" element={<AdminWrap element={<CanBoManagement/>}/>}></Route>
                  <Route path="/AddCANBO" element={<AdminWrap element={<CanBoAdd/>}/>}></Route>
                  <Route path="/HouseholdFeeList/create" element={<PrivateRoute element={<CreateHouseholdFeeList/>}></PrivateRoute>}></Route>
                  <Route path="/HouseholdFeeList/:id" element={<PrivateRoute element={<FeeHouseholdList/>}></PrivateRoute> }></Route>
                  <Route path="/GetStatistic" element={<PrivateRoute element={<Statistic/>}/>}></Route>
                  <Route path="/CreatedList" element={<PrivateRoute element={<CreatedList/>}/> }></Route>
                  <Route path="/HouseholdContributionList/create" element={<PrivateRoute element={<CreateHouseholdContributionList/>}></PrivateRoute>}></Route>
                  <Route path="/HouseholdContributionList/:id" element={<PrivateRoute element={<ContributionHouseholdList/>}></PrivateRoute> }></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
