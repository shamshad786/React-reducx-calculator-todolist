import React from "react";
import Counter  from "./Counter";
import {Route, Switch} from 'react-router-dom'
import TodoList from "./TodoList";
import {Link} from 'react-router-dom'

const App = () =>{

    return (
        <>

        <Link to ='/'>Counter</Link>&nbsp;
        <Link to='/todolist'> TodoList </Link>

          <Switch>
              <Route exact path='/' component={Counter} />
              <Route path='/todolist' component={TodoList} />
          </Switch>
        </>
    )
}


export default App;