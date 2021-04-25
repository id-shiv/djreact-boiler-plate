import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

import { API_BACKEND_URL_ROOL, API_APPLICATION_NAMESPACE, API_NOTIFICATION_NAMESPACE } from "../constants"

// Prepare the Context Layer
export const Context = createContext();

// Create the Provider that will wrap the calling component with the Data Layer
// and make the context available for components to consume
export const ContextProvider = ({children}) => {
    const [state, setState] = useState({
            'notifications': [],
            'feature': 'Home'
    })

    useEffect(() => {
        // fetch notifications
        axios.get(`${API_BACKEND_URL_ROOL}${API_APPLICATION_NAMESPACE}${API_NOTIFICATION_NAMESPACE}`)
            .then(res => {
                setState({'notifications': res.data})
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
}

// Create a Consumer for components to consume the value available from provider
export const ContextConsumer = Context.Consumer