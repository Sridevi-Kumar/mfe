import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import Marketing from './Marketing';

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<Marketing history={history} />, el);
    return {
        onParentNavigate({pathname: nextpathname}){
            const {pathname} = history.location
            if(pathname !== nextpathname){
                history.push(nextpathname)
            }
            console.log("Container just navigated");
        }
    }
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()})
    }
}

export { mount }
