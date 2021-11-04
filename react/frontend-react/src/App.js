import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import ShowPosts from "./pages/ShowPosts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import { Layout } from 'antd';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
      <Layout>
        <Header>
          <Route path="/" component={Header}/>
        </Header>
        <Switch>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/showposts" component={ShowPosts}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
