import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const roster1sort = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="Callsign"/>
            <TextField source="Name"/>
            <TextField source="Rank"/>
            <EmailField source="Hired By"/>
            <TextField source="Date"/>
            <TextField source="Timezone"/>
            <TextField source="Discord"/>
            <TextField source="Steam"/>
            <TextField source="Phone"/>
        </Datagrid>
    </List>
);