import React from 'react';
import { Playground } from './components/component/playground';
import Apology from './components/component/apology';

const isDesktop = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|tablet|touch|samsung|fridge/i.test(userAgent);
    return !isMobile;
};

function App() {
    const [isDesktopDevice, setIsDesktopDevice] = React.useState(isDesktop());
    if (!isDesktopDevice) {
        return <Apology />;
    }
    else {
        return (
            <Playground />
        )
    }
}

export default App