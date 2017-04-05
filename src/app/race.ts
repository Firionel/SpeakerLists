import {RaceClass} from "./raceclass";
import {RaceValuationType} from "./racevaluationtype";
import {ModelService} from "./model.service";
/**
 * Created by firionel on 3/5/17.
 */

export class Race{
  get raceClass(): RaceClass {
    return this._raceClass;
  }
  public constructor(id: number, name:string, raceClassId:number, orderNumber: number, valuationType:RaceValuationType){
    this.id = id;
    this.name = name;
    this._raceClassId = raceClassId;
    this.orderNumber = orderNumber;
    this.valuationType = valuationType;
  }
  private _modelService: ModelService;
  id: number;
  name: string;
  private _raceClassId: number;
  private _raceClass: RaceClass;
  orderNumber: number;
  valuationType: RaceValuationType;
}
