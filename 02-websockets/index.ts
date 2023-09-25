const server = Bun.serve<{ authToken: string; }>({
    fetch(req, server) {
      // use a library to parse cookies
      server.upgrade(req, {
        data: { authToken: 'Algun token' },
      });
      return new Response('Websocket server', {
        headers: {'Content-type': 'text/html'}
      })
    },
    websocket: {
        open(ws){
            console.log('Cliente conectado');
            ws.subscribe('global-server-chat')
        },
        close(ws){
            console.log('Cliente desconectado');
            
        },
      // handler called when a message is received
      async message(ws, message) {
        console.log(`Received: ${message}`);
        ws.publish('global-server-chat', message);
      },
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);