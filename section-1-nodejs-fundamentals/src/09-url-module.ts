

// http:localhost:3000/users?id=1&name=John

function runUrlDemo():void{

    // how to create a url object from url string
    const url = new URL("http://localhost:3000/users?page=2&limit=10&sort=latest");

    // how to access url properties
    // full url
    console.log("url.href:", url.href);

    // protocol
    console.log("url.protocol:", url.protocol);
    // host (domain + port)
    console.log("url.hostname:", url.hostname);
    // path
    console.log("url.pathname:", url.pathname);
    // query string
    console.log("url.search:", url.search);
    // query parameters
    console.log("url.searchParams:", url.searchParams);
    


    const page = url.searchParams.get("page");
    console.log("page:", page);

    const limit = url.searchParams.get("limit");
    console.log("limit:", limit);
    
    const latestSort = url.searchParams.get("sort");
    console.log("latestSort:", latestSort);

    

    url.searchParams.set("page", "3");
    console.log("url.searchParams:", url.searchParams);
    
    const isPageSecond = url.searchParams.has("page");
    console.log("isPageSecond:", isPageSecond);


    const newUrl = new URL("http://localhost:3000/users");
    const queryParams = new URLSearchParams({
        search: "node js",
        page: "1",
        limit: "5"
    });

        console.log("newUrl:", newUrl.toString());

    newUrl.search = queryParams.toString();
    console.log("newUrl.href:", newUrl.href);




    
}

runUrlDemo();