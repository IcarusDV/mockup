import { useContext } from "react";
import { StatusBarContext } from "../providers/StatusBarContext";

export default function useStatusBarEnabled(){
    const context = useContext(StatusBarContext);

    if(!context){
        throw new Error('"useStatusBarEnabled" hook must be inside a StatusBarContext')
    }

    return context;
}