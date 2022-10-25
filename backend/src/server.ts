import { app } from './app';

const port =  process.env.PORT || 4444;

const server = app.listen(port,()=>{
  console.log(`Escutando na porta ${port}`);
});

process.on('SIGINT',()=>{
  server.close();
  console.log('Sevidor fechado');
});