import { NextFunction, Request, Response, Router } from "express";

export class HtmlRoutes {
  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {    
    router.get("*", (req: Request, res: Response, next: NextFunction) => {   
       res.render('index', {
            req,
            res,
            providers: [{
              provide: 'serverUrl',
              useValue: `${req.protocol}://${req.get('host')}`
        }] });
    });
  }
}