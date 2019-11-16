import React from 'react';

import Title from './Title'; // we can drop the .js file extension
import './App.css';

const App = (props) => {
    return (
        <div>
            <Title text="Title One" color="red" isImportant={true} />
            <Title text="Title One" color="green" isImportant={false} />
            <Title text="Title One" color="orange" isImportant={false} />
        </div>
    );
};

export default App;
