/**
 * Created by firionel on 3/5/17.
 */

import {Club} from "./club";
import {RaceClass} from "./raceclass";


export class Participant {
  get club(): Club {
    return this._club;
  }
  get raceClass(): RaceClass {
    return this._raceClass;
  }

  constructor(id: number, firstName: string, lastName: string, startNumber: number
            , male: boolean, clubId: number, raceClassId: number){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.male = male;
    this._clubId = clubId;
    this._raceClassId = raceClassId;
  }
  id: number;
  firstName: string;
  lastName: string;
  startNumber: string;
  _clubId: number;
  private _club: Club;
  male: boolean;
  _raceClassId: number;
  private _raceClass: RaceClass;

}
