import express, {Application} from 'express';
/* se puede definir el alias desde aquí */
import userRoutes from '../routes/usuario';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        /* Definir mis rutas */
        this.routes();

    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
            
        });
    }
}

export default Server;