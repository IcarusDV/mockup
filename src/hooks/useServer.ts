import { useContext } from "react";
import { ServerContext } from "../providers/ServerProvider";

export default function useServer(){
    const context = useContext(ServerContext);
    return context;
}