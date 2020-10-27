import { Router } from 'express';
import pacientesController from '../controllers/pacientesController';

class PacientesRoutes {
    
    public router: Router;
    
    constructor() {
        this.router = Router();
        this.config();
    }
    
    config() {
        this.router.get('/', pacientesController.getlist);
        this.router.get('/:id', pacientesController.getpaciente);
        this.router.post('/', pacientesController.setPacientes);
        this.router.put('/:id', pacientesController.updatePacientes);
        this.router.delete('/:id', pacientesController.deletePaciente);
    }
}

const pacientesRoutes = new PacientesRoutes();
export default pacientesRoutes.router;