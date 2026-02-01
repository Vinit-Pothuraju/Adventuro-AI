import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import TripDetails from "./pages/TripDetails";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
     

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/create-trip"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <CreateTrip />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/trips/:id"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <TripDetails />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <Profile />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <Settings />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>



    </Routes>
  );
}
