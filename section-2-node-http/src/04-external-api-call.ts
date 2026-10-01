// web scraping 

const API_URL = "https://jsonplaceholder.typicode.com/users/1"

type PlaceHolderUser = {
    id : number;
    name : string;
    email : string;
    company :{
        name : string
    }
}

type PublicUser = {
    id : number;
    name : string;
    email : string;
    company : string;
    
}



function transformUser(rawData :PlaceHolderUser) :PublicUser  {
    return {
        id : rawData.id,
        name : rawData.name,
        email : rawData.email,
        company : rawData.company.name
    }

}


async function fetchExternalUser():Promise<void> {
    
    // AbortController lets us cancel an inprocess fetch requests

    const controller = new AbortController();


    const timeout = setTimeout(()=>{
        controller.abort()
    },5000)


    try{

        const response = await fetch(API_URL, {
            method : "GET",
            signal: controller.signal
        })

        if(!response.ok){
            console.log(`upstream api error: ${response.status}`)
            return;
        }

        const data = (await response.json()) as PlaceHolderUser;
       
        const user = transformUser(data);

        console.log(user)




    }catch(error){

        const fetchError = error instanceof Error && error.name === 'AbortError' 
        if(fetchError){
            console.log("Request timed out so aborting")
        }

        const message = error instanceof Error ? error.message : "Unknown error"

        console.log(message)
        return;
        
    }finally{
        clearTimeout(timeout)
    }

}

 fetchExternalUser()