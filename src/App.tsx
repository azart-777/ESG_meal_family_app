import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "./shared/hooks/useLanguage";

import "./App.scss";
import "./assets/fonts/fonts.scss";
import {Home} from "./pages/";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
