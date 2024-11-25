import useAuth from "./useAuth";
import useServer from "./useServer";
interface ReturnObject extends Response {
    data: any
}

export default function useEndpointAction(method: RequestInit['method'], endpoint: string) {

    const { origin } = useServer();
    const { userToken } = useAuth();
    
    async function makeRequest(data?: RequestInit['body']): Promise<ReturnObject>{
        
        const configData: RequestInit = {method, headers: {
            "content-type": 'application/json',
        }};

        if(userToken){
            configData.headers['authorization'] = userToken
        }

        if(data){
            configData.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${origin}${endpoint}`, configData);
        const dataReceived = await response.json();
        return { ...response, data: dataReceived }
    }

    return makeRequest 
}