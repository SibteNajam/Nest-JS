import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// used nextfunction to call next middleware or route handler so that request may not stuck in middleware and can be processed further
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request... Method: ${req.method}, URL: ${req.originalUrl}`);
    next();// pass request where it need to go in any controller
  }
}
