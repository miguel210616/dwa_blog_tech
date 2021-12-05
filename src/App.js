import './App.css';
import Router from './router';
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
