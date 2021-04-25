// Routing
import { BrowserRouter as Router , Switch, Route} from "react-router-dom"

// Context API
import { ContextProvider } from "./context"

// Styles
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import "./App.css"
import 'fontsource-montserrat';

// Get Pages
import { Header, Body, SideBar, Content, Notifications } from "./containers"
import { OBSM } from "./pages"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      contrastText: 'white'
    },
    secondary:{
      main: '#ff4d4d'
    },
    background:{
      default: '#333333'
    }
  }
})

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app__container">
            <Router>
            <Header />
            <Body>
              {/* SideBar */}
              <SideBar />

              {/* Display Content based on route */}
              <Content>
                <Switch>
                  <Route exact path="/">
                    <p>Home Page</p>
                  </Route>
                  <Route path="/notifications">
                    <Notifications />
                  </Route>
                  <Route path="/obsm">
                    <OBSM />
                  </Route>
                </Switch>
              </Content>
            </Body>
          </Router>
        </div>
      </ThemeProvider>
    </ContextProvider>
  
  );
}

export default App;
