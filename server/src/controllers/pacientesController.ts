import {Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';

class PacientesController {

    public async getlist(req: Request, res: Response): Promise<Response> {
        try {
            const pacientes: QueryResult = await pool.query('SELECT * FROM pacientes ORDER BY id ASC');
            return res.status(200).json(pacientes.rows);
        } catch (e) {
            console.log(e);
            return res.status(500).json('Internal server error');
        }
    }

    public async getpaciente(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const paciente: QueryResult = await pool.query('SELECT * FROM pacientes WHERE id = $1', [id]);
            if (paciente.rows.length > 0) {
                return res.status(200).json(paciente.rows);
            } else {
                return res.send('Paciente no encontrado');
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json('Internal server error');
        }
    }

    public async setPacientes(req: Request, res: Response): Promise<Response> {
        try {
            const { nombre, apellido, numid } = req.body;
            await pool.query('INSERT INTO pacientes (nombre, apellido, numid) VALUES ($1, $2, $3)', [nombre, apellido, numid]);
            return res.status(200).send('INSERTADO');
        } catch (e) {
            console.log(e);
            return res.status(500).json('Internal server error');
        }
    }

    public async updatePacientes(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { nombre, apellido, numid } = req.body;
            await pool.query('UPDATE pacientes SET nombre = $1, apellido = $2, numid = $3 WHERE id = $4', [nombre, apellido, numid, id]);
            return res.status(200).send('ACTUALIZADO');
        } catch (e) {
            console.log(e);
            return res.status(500).json('Internal server error');
        }
    }

    public async deletePaciente(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await pool.query('DELETE FROM pacientes where id = $1', [id]);
            return res.status(200).send('BORRADO');
        } catch (e) {
            console.log(e);
            return res.status(500).json('Internal server error');
        }
    }

}

const pacientesController = new PacientesController();
export default pacientesController;