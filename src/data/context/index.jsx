import React from "react";

export const DataContext = React.createContext({});
export const DataProvider = DataContext.Provider;

export const withDataSources = (Component) => (props) =>(
    <DataContext.Consumer>
        {(val) => <Component {...props} dataSources={val}/>}
    </DataContext.Consumer>
)