import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {HOME, PLAY, QUESTIONS, REPORT} from "./routesConstants";
import Home from "../pages/Home/Home";
import Play from "../pages/Play/Play";
import Questions from "../pages/Questions/Questions";
import Report from "../pages/Report/Report";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home/>
        </Route>
        <Route exact path={PLAY}>
          <Play/>
        </Route>
        <Route exact path={QUESTIONS}>
          <Questions/>
        </Route>
        <Route exact path={REPORT}>
          <Report/>
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}