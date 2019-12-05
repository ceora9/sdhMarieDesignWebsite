import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SELApp from '../uxDesign/SELApp';

const Routes = () => {
    return (
        <section className='container'>

            <Switch>
                <Route exact path='/SELApp' component={SELApp} />
            </Switch>
        </section>
    );
};

export default Routes;