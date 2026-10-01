import http from "node:http";

const PORT = 3000;

type CreateUserBody = {
  name?: string;
  email?: string;
};

type User = {
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

const server = http.createServer((req, res) => {
  const method = req.method ?? "GET";

  const requestUrl = new URL(
    req.url ?? "/",
    `http://${req.headers.host}`
  );

  const pathName = requestUrl.pathname;

  res.setHeader("Content-Type", "text/plain");

  // GET /healthy
  if (method === "GET" && pathName === "/healthy") {
    res.statusCode = 200;
    res.end("HELLO WORLD");
    return;
  }

  // GET /users
  if (method === "GET" && pathName === "/users") {
    res.statusCode = 200;
    res.end("LIST OF USERS");
    return;
  }

  // POST /users
  if (method === "POST" && pathName === "/users") {
    const chunks: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const rawBody = Buffer.concat(chunks).toString();

        if (!rawBody) {
          res.statusCode = 400;
          res.end("Request body is required");
          return;
        }

        const body = JSON.parse(rawBody) as CreateUserBody;

        if (!body.name || !body.email) {
          res.statusCode = 400;
          res.end("Both name and email are required");
          return;
        }

        res.statusCode = 201;
        res.end(`User created: ${body.name} and ${body.email}`);
      } catch {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    });

    req.on("error", () => {
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end("Failed to read request body");
      }
    });

    return; // ⭐ Important
  }

  // 404 must be outside the POST block
  res.statusCode = 404;
  res.end("Route not found");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});