import "reflect-metadata";

export class Schema {
  public static Tabels: { [index: string]: {[index:string]: string} } = {};
}

export const DbTable = (table?:string) => (target : any, key : string) => {
                                    var modelType = Reflect.getMetadata("design:type", target, key).name;
                                    var contextType = target.constructor.name;
                                    var tableName = table || key;
                                    if(!Schema.Tabels.hasOwnProperty(contextType))
                                    {
                                      Schema.Tabels[contextType] = {};
                                    }

                                    Schema.Tabels[contextType][modelType] = tableName ;
                                }