import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Editor from '../components/Editor';

import ImageDetail from "../Pages/ImageDetail";
import Home from '../Pages/Home';

import '../assets/fonts/04B_30__.TTF';
import '../assets/fonts/Retro Gaming.ttf';
import './App.scss';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/paint" exact>
          <Editor />
        </Route>

        <Route path="/images/:imageId">
          <ImageDetail />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
