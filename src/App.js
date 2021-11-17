import './App.css';
import {LoginView,ContactView} from './views'
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme'
import Home from './views/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*<Home />*/}
        <LoginView />
      </div>
    </ThemeProvider>
  );
}

export default App;
