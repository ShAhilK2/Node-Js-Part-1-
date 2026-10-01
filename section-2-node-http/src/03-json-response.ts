import http from "node:http";

const PORT = 3000;


type User = {
    id: number,
  name?: string;
  email?: string;
};

// T is a generic type that represents the type of the data
type ApiResponse<T> = {
    success : boolean;
    message : string;
    data?: T;
    error?: string;
}

function sendJson<T>(res: http.ServerResponse,statusCode: number, body: ApiResponse<T>) :void {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = statusCode;
    res.end(JSON.stringify(body));
}

const Users : User[] = [
    {id : 1,
        name : "skdev",
        email : "skdev842@gmail.com"
    },  {
        id:2,
        name : "jhinal",
        email : "jhinalskdev@gmail.com"
    }
]

const server = http.createServer((req, res) => {
  const method = req.method ?? "GET";

  const requestUrl = new URL(
    req.url ?? "/",
    `http://${req.headers.host}`
  );

  const pathName = requestUrl.pathname;

  res.setHeader("Content-Type", "application/json");


  if(method === "GET" && pathName === "/") {
    sendJson(res, 200, {
      success: true,
      message: "Server is running",
      data: 
      {
        routes : ["GET/USERS"]
      }
    });
    return;
  }

   if(method === "GET" && pathName === "/users") {
    sendJson(res, 200, {
      success: true,
      message: "Users fetched successfully",
      data: 
      {
        routes : [Users]
      }
    });

    return


    
  }

      sendJson<null>(res, 404, {
      success: false,
      message: "Route not found",
      error : `Route ${pathName} with this method ${method} not found`
    });


});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});