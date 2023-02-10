// @flow
import { Request, Response } from 'express'

class HomeController {
  // GET
  async fetchTest(req: Request, res: Response) {
    res.send('<h1>Testing....</h1>').status(200)
  }
  // POST
  async storeTest(req: Request, res: Response) {
    const { test } = req.body
    if (test) return console.log('TEST POST')
  }
}

export default HomeController
