import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import ShowPosts from "./pages/ShowPosts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostEdit from "./pages/PostEdit";
import Header from "./components/Header";
import { Layout } from 'antd';

import StateExample from "./components/StateExample";
function App() {


  return (
    <div className="App">
      <h1>Some text</h1>
        <BrowserRouter>
        <Layout>
          <Header>
            <Route path="/" component={Header}/>
          </Header>
          <Switch>
           { //<Route exact path="/" component={ShowMagic}/> 
           }
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/showposts" component={ShowPosts}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/ex" component={StateExample}/>
            <Route exact path="/post-edit" component={PostEdit}/>
          </Switch>
        </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
