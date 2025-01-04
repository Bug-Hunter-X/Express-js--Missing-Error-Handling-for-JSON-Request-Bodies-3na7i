# Express.js: Missing Error Handling for JSON Request Bodies

This repository demonstrates a common but easily overlooked vulnerability in Express.js applications: the lack of proper error handling when processing JSON request bodies.

The `bug.js` file showcases an Express.js app that's vulnerable to unexpected JSON input. The application lacks error handling for situations where `req.body` might be malformed or missing entirely.  This can cause the server to crash or behave unexpectedly.  The solution is presented in `bugSolution.js`

## How to reproduce the bug:

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install`.
4. Run `node bug.js`.
5. Send a malformed JSON payload (e.g., missing closing brace) to the `/user` POST endpoint using a tool like `curl` or Postman. Observe the server's response (or lack thereof).

## How to solve the bug:

The `bugSolution.js` demonstrates the correct implementation which includes robust error handling. The solution explicitly checks for the existence and validity of the request body before processing it.