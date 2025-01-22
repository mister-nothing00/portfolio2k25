import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { UserProvider } from "./context/User.jsx";
import { ProjectsProvider } from "./context/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProjectsProvider>
        <Provider>
          <App />
        </Provider>
      </ProjectsProvider>
    </UserProvider>
  </StrictMode>
);
