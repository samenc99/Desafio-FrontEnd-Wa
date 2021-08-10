import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {HOME, PLAY, QUESTIONS} from "./routesConstants";
import Home from "../pages/Home/Home";
import Play from "../pages/Play/Play";

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
          <div>questions</div>
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}