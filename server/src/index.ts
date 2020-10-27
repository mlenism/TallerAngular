import express, { Application } from 'express';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import pacientesRoutes from './routes/pacientesRoutes';

class Server {
    
    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/Pacientes', pacientesRoutes);
    }
    
    start(): void {
        this.app.listen(3000, () => {
            console.log("server on port", this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();