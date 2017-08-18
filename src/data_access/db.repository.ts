export class DbRepository<T> {
  ConnectionString:string;
  Table:string;
  
  constructor(connection:string, table:string)
  {
    this.ConnectionString = connection;
    this.Table = table; 
  }
}