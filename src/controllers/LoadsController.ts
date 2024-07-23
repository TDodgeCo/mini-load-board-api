import { Request, Response } from 'express'
import Load from '../models/Load'

class LoadsController {
  public async index(req: Request, res: Response) {
    try {
      const loads = await Load.find();
      res.json(loads);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  public async store(req: Request, res: Response) {
    try {
      const newLoad = new Load(req.body);
      const savedLoad = await newLoad.save();
      res.status(201).json(savedLoad);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const load = await Load.findById(req.params.id);
      if (!load) return res.status(404).json({ message: 'Load not found' });
      res.json(load);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new LoadsController()
