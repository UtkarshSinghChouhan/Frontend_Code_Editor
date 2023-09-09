import {createContext, useContext, useState} from "react";

const contextObj = createContext();

const AppProvider = (props) => {

    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [js, setJs] = useState("")

    return(
        <contextObj.Provider 
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs
            }}
        >
            {props.children}
        </contextObj.Provider>
    )
}

const useGlobalContext = () => {
    const obj = useContext(contextObj);
    return obj;
}

export{AppProvider, useGlobalContext}