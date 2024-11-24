const origin = "http://192.168.18.14:3000";

interface ReturnObject extends Response {
    data: any
}

export default function useEndpointAction(method: RequestInit['method'], endpoint: string) {
    
    async function makeRequest(data?: RequestInit['body']): Promise<ReturnObject>{
        
        const configData: RequestInit = {method, headers: {
            "content-type": 'application/json'
        }};

        if(data){
            configData.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${origin}${endpoint}`, configData);
        const dataReceived = await response.json();
        return { ...response, data: dataReceived }
    }

    return makeRequest 
}