import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Navigation from './Navigation';
// import Landing from './Landing';
import SELApp from './UXDesign/SELApp';

const Routes = () => {
    return (
        <section className='container'>

            <Switch>
                {/* <Route exact path='/Landing' component={Landing} />
                <Route exact path='/Navigation' component={Navigation} /> */}
                <Route exact path='/SELApp' component={SELApp} />
            </Switch>
        </section>
    );
};

export default Routes;