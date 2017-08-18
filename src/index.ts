import { HttpServer } from './server/http.server';
class App {
    
   server:HttpServer; 
   constructor() {  
      this.server = new HttpServer();
   }

   public Run(){     
     this.server.start(8800);
   }
}

let app = new App();
app.Run();