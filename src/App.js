import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About, Home } from "./Pages";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/ContactUs";
import Consult from "./Pages/Cosult";
import Implement from "./Pages/Implement";
import Domain from "./Pages/Domain";
import Development from "./Pages/Development";
import Process from "./Pages/process";
import Integration from "./Pages/Integration";
import Training from "./Pages/Training";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/About-us" element={<About />} />
      <Route path="/Contact-us" element={<Contact />} />
      <Route path="/ServiceNow-Consulting" element={<Consult />} />
      <Route path="/ServiceNow-Implementation" element={<Implement />} />
      <Route path="/ServiceNow-Training-Solutions" element={<Training />} />
      <Route path="/Domain-Management-Services" element={<Domain />} />
      <Route path="/Integration" element={<Integration />} />
      <Route path="/ServiceNow-Process-Optimisation" element={<Process />} />
      <Route path="/Custom-App-Development" element={<Development />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
