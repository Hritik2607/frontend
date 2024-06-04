import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BookTable from "./pages/BookTable";
import { Toaster } from "react-hot-toast";
import BookingSuccessful from "./pages/BookingSuccessful";
import OrderOnline from "./pages/OrderOnline";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="w-flex flex-col overflow-x-hidden">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/booking-successful" element={<BookingSuccessful />} />
        <Route path="/order-online" element={<OrderOnline />} />

        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
