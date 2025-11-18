import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '/components/Login';
function App() {
return (
<Router>
<Switch>
<Route path="/login" component={Login} />
<Route path="/registro" component={Registro} />
<Route path="/olvido" component={OlvidoContrasena} />
</Switch>
</Router>
);
}
export default App;
