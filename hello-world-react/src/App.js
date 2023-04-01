import './App.css';

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// mui and fonts
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

// pages
import Onboarding from './pages/Onboarding/Onboarding';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './pages/ErrorPage/ErrorPage';

// navbar
import NavBar from './components/NavBar/NavBar';
import { grey, red } from '@mui/material/colors';

// ROOT
// contains router and mui styling
// individual pages are in the pages folder

const primaryTheme = createTheme({
  palette: {
    primary: grey,
    secondary: red
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={primaryTheme}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Onboarding />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
