import React from 'react';
import routes from '../routers/routes';
import { Route, Router } from 'react-router';
import { browserHistory } from './utils';
import { pathJoin } from 'Utils/appFunc';

let pathname = '/';
if (window.fmxlyPathname) {
    pathname = window.fmxlyPathname;
} else {
    pathname = '';
}

const RouteWithSubRoutes = (route) => {
    return (
        <Route exact
            path={pathJoin([pathname, route.path])}
            render={(props) => {
                return (<route.component {...props} routes={route.routes} />);
            }}
        />
    );
};
const App = () => {
    return (
        <React.Fragment>
            {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
        </React.Fragment>
    );
};
const Root = () => {
    return (
        <Router basename={pathname} forceRefresh={true} history={browserHistory}>
            <App />
        </Router>
    );
};
export default Root;
