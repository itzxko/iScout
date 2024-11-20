import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import AdminAccount from "./pages/admin/Account";
import AdminHome from "./pages/admin/Home";
import LeaderAccount from "./pages/leader/Account";
import LeaderHome from "./pages/leader/Home";
import ScoutAccount from "./pages/scout/Account";
import ScoutHome from "./pages/scout/Home";
import { AuthProvider } from "./context/AuthProvider";
import { QuizProvider } from "./context/QuizProvider";
import Outdoorsman from "./pages/scout/Badges/Outdoorsman";
import Explorer from "./pages/scout/Badges/Explorer";
import Eagle from "./pages/scout/Badges/Eagle";
import Pathfinder from "./pages/scout/Badges/Pathfinder";
import Venturer from "./pages/scout/Badges/Venturer";
import ExplorerExam from "./pages/scout/Examinations/ExplorerExam";
import PathfinderExam from "./pages/scout/Examinations/PathfinderExam";
import OutdoorsmanExam from "./pages/scout/Examinations/OutdoorsmanExam";
import VenturerExam from "./pages/scout/Examinations/VenturerExam";
import EagleExam from "./pages/scout/Examinations/EagleExam";
import { RankProvider } from "./context/RankProvider";
import AdminUsers from "./pages/admin/Users";
import { UsersProvider } from "./context/UsersProvider";
import Users from "./pages/admin/Users";

const App = () => {
  return (
    <>
      <AuthProvider>
        <UsersProvider>
          <RankProvider>
            <QuizProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* admin */}
                <Route path="/admin/account" element={<AdminAccount />} />
                <Route path="/admin/home" element={<AdminHome />} />
                <Route path="/admin/users" element={<AdminUsers />} />

                {/* scout */}
                <Route path="/scout/account" element={<ScoutAccount />} />
                <Route path="/scout/home" element={<ScoutHome />} />
                {/* badges */}
                <Route path="/scout/badges/explorer" element={<Explorer />} />
                <Route
                  path="/scout/badges/pathfinder"
                  element={<Pathfinder />}
                />
                <Route
                  path="/scout/badges/outdoorsman"
                  element={<Outdoorsman />}
                />
                <Route path="/scout/badges/venturer" element={<Venturer />} />
                <Route path="/scout/badges/eagle" element={<Eagle />} />
                {/* examinations */}
                <Route path="/scout/exam/explorer" element={<ExplorerExam />} />
                <Route
                  path="/scout/exam/pathfinder"
                  element={<PathfinderExam />}
                />
                <Route
                  path="/scout/exam/outdoorsman"
                  element={<OutdoorsmanExam />}
                />
                <Route path="/scout/exam/venturer" element={<VenturerExam />} />
                <Route path="/scout/exam/eagle" element={<EagleExam />} />

                {/* leader */}
                <Route path="/leader/account" element={<LeaderAccount />} />
                <Route path="/leader/home" element={<LeaderHome />} />
              </Routes>
            </QuizProvider>
          </RankProvider>
        </UsersProvider>
      </AuthProvider>
    </>
  );
};

export default App;
