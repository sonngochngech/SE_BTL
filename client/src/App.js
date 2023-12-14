
import './App.css';


import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/DashBoard";
import {PrivateRoute} from "./route/PrivateRoute";
import FeeAndContributionList from "./pages/GetFeeAndContributionPages/feeAndContributionList";
import CreateHouseholdFeeList from "./pages/GetFeeAndContributionPages/CreateHouseholdFeeList";
import FeeHouseholdList from "./pages/GetFeeAndContributionPages/FeeHouseholdList";
import CanBoManagement from './pages/GetCanBoPages/CanBoManagement';
import CanBoAdd from './pages/GetCanBoPages/CanBoAdd';



function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<PrivateRoute element={<Dashboard/>}/>}></Route>
                  <Route path="/login" element={<SignIn/>}/>
                  <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>}/>}></Route>
                  {/*get fee and contribution management*/}
                  <Route path="/GetFACMana" element={<PrivateRoute element={<FeeAndContributionList/>}/>}></Route>
                  <Route path="/GetCANBOMana" element={<PrivateRoute element={<CanBoManagement/>}/>}></Route>
                  <Route path="/AddCANBO" element={<PrivateRoute element={<CanBoAdd/>}/>}></Route>
                  <Route path="/HouseholdFeeList/create" element={<PrivateRoute element={<CreateHouseholdFeeList/>}></PrivateRoute>}></Route>
                  <Route path="/HouseholdFeeList/:id" element={<PrivateRoute element={<FeeHouseholdList/>}></PrivateRoute> }></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
