import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {HOME, PLAY, QUESTIONS} from "./routesConstants";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <div>home</div>
        </Route>
        <Route exact path={PLAY}>
          <div>play</div>
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