import { PrismaClient } from '@prisma/client';

let prisma: any;
if (process.env.ENV === 'development' || process.env.ENV === 'testing') { 
  prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  })
  
  prisma.$on('query', (e: any) => {
    console.log('Query: ' + e.query);
    console.log('Params: ' + JSON.stringify(e.params));
    console.log('Duration: ' + e.duration + 'ms');
  })

} else {
  prisma = new PrismaClient();
}



export default prisma;
