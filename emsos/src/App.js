// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
// import { roster1sort } from './sortDB'
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:5000');


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="EMS" list={ListGuesser} />
        <Resource name="Psychology" list={ListGuesser}/>
        <Resource name="Neurology" list={ListGuesser}/>
    </Admin>
);

export default App;