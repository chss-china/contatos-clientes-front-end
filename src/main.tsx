import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from "./providers/clientContext.tsx";
import { ContactProvider } from "./providers/contactscontext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //ja configurei o ContactProvider
  //<React.StrictMode>
  <BrowserRouter>
    <ClientProvider>
      <ContactProvider>
        <App />
      </ContactProvider>
    </ClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
