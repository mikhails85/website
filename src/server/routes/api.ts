import { NextFunction, Request, Response, Router } from "express";
import { User } from "../../model/user";

export class ApiRoutes {
  
  private static fakeUser():User
  {
    let testUser:User = new User();
    testUser.Username = 'test';
    testUser.Password = 'test';
    testUser.FirstName = 'Test';
    testUser.LastName = 'User'; 
    return testUser;
  }

  public static create(router: Router) {    
    router.post("/api/authenticate", (req: Request, res: Response, next: NextFunction) => {      
       let params = req.body;
       let testUser = ApiRoutes.fakeUser();
            
       if (params.username === testUser.Username && params.password === testUser.Password) {               
          res.status(200).json({token: 'fake-jwt-token'});
        } else {
          res.status(200).json({});            
        }       
    });
    
    router.get("/api/user", (req: Request, res: Response, next: NextFunction) => {        
        if (req.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let testUser = ApiRoutes.fakeUser();
          res.status(200).json(testUser);                    
        } else {
          res.status(401).json({});            
        }   
    });
  }
}