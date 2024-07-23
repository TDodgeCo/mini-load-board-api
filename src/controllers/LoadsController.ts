import { Request, Response } from 'express'

class LoadsController {
  public index(req: Request, res: Response): void {
    res.send('LoadsController.index testing 123')
  }

  public show(req: Request, res: Response): void {
    res.send('LoadsController.show')
  }
}

export default new LoadsController()
