import {Schema, DbTable} from '../decorators/tabel.schema';
import {User} from '../../model/user';
import {DbRepository} from '../db.repository';

class UserSchema{
  @DbTable()
  Users:User;
  
  GetTabels(): {[index:string]: string}
  {
    return Schema.Tabels[this.constructor.name];
  }
}

export class UserContext{
  ConnectionString:string;
  Schema:UserSchema;
  constructor(){
    this.ConnectionString ='../../../database';
    this.Schema = new UserSchema();
  }
  
  Get<T>(entity: { new (): T }):DbRepository<T>
  {
    return new DbRepository(this.ConnectionString, this.Schema.GetTabels[entity.name]);
  }
}