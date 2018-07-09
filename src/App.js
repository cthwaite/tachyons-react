import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AppWrapper = ({debug, children}) => {
    const defaults = ['App', 'w-100', 'sans-serif'];
    const classes = classNames(
        { 'debug': debug },
        defaults
    );
    return (
        <main className={classes}>
            {children}
        </main>
    );
};

AppWrapper.propTypes = {
    debug: PropTypes.bool
};

export default class App extends Component {
    render() {
        return (
            <AppWrapper debug={false}>
                <p>Hello, world!</p>
            </AppWrapper>
        );
    }
}
