import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Routes } from "./Routes";
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          {
            Routes.map((item, index) =>
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            )
          }
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
