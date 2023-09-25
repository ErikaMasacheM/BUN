import { dirname } from "path";

const server = Bun.serve({
    port: 3000,
    fetch(request) {

        const url = new URL(request.url);
        console.log(url.pathname);
        
        const file = Bun.file('./public/index.html');
        console.log(import.meta.dir);
        

        return new Response(file, {
            headers: {"content-type": "text/html"}
        });
    },
});

console.log(`Listening on localhost:${server.port}`);

// OPCION 1
// const server = Bun.serve({
//     port: 3000,
//     fetch(request) {

//         const url = new URL(request.url);
//         console.log(url.pathname);
        

//         const html = `
//                     <html>
//                         <head>
//                             <title>BUN</title>
//                         </head>
//                         <body>
//                             <h1> Hello, Bun!</h1>
//                         </body>
//                     </html>
//                     `;

//         return new Response(html, {
// headers: {"content-type": "text/html"}
//         });
//     },
// });

// console.log(`Listening on localhost:${server.port}`);