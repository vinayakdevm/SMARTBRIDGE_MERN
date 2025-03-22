import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TextUpdater from "./TextUpdater.jsx";
import SimpleForm from "./SimpleForm.jsx";
import UserCard from "./UserCard.jsx";
import CustomButton from "./CustomButton.jsx";
import LoginForm from "./LoginForm.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("textUpdater");

  const renderPage = () => {
    switch (currentPage) {
      case "textUpdater":
        return <TextUpdater />;
      case "simpleForm":
        return <SimpleForm />;
      case "userCard":
        return (
          <UserCard
            name="Vinayak dev Mishra"
            email="vinayakdevmishra2022@vitbhopal.ac.in"
          />
        );
      case "customButton":
        return <CustomButton />;
      case "loginForm":
        return <LoginForm />;
      default:
        return <TextUpdater />;
    }
  };

  return (
    <StrictMode>
      <div className="bg-[#f5f3ff] w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex gap-4 mb-6">
          <button
            className="bg-[#6d28d9] text-[#ffffff] p-3 rounded-lg hover:bg-[#4c1d95] transition-all"
            onClick={() => setCurrentPage("textUpdater")}
          >
            TextUpdater
          </button>
          <button
            className="bg-[#6d28d9] text-[#ffffff] p-3 rounded-lg hover:bg-[#4c1d95] transition-all"
            onClick={() => setCurrentPage("simpleForm")}
          >
            SimpleForm
          </button>
          <button
            className="bg-[#6d28d9] text-[#ffffff] p-3 rounded-lg hover:bg-[#4c1d95] transition-all"
            onClick={() => setCurrentPage("userCard")}
          >
            UserCard
          </button>
          <button
            className="bg-[#6d28d9] text-[#ffffff] p-3 rounded-lg hover:bg-[#4c1d95] transition-all"
            onClick={() => setCurrentPage("customButton")}
          >
            CustomButton
          </button>
          <button
            className="bg-[#6d28d9] text-[#ffffff] p-3 rounded-lg hover:bg-[#4c1d95] transition-all"
            onClick={() => setCurrentPage("loginForm")}
          >
            LoginForm
          </button>
        </div>
        {renderPage()}
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
