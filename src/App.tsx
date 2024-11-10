import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { LanguageProvider } from "./shared/hooks/useLanguage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import "./assets/fonts/fonts.scss";
import { ChipItLanding } from "./pages/";
import theme from "./theme";
import { ROUTING_CONSTANTS } from "./shared/constants";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
              <CssBaseline />
                <Routes>
                    <Route path='/' element={<ChipItLanding />}></Route>
                    <Route path={ROUTING_CONSTANTS.CHIP_IT_FAMILY_LANDING.ROUTE} element={<ChipItLanding />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
