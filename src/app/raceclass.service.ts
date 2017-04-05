/**
 * Created by firionel on 3/7/17.
 */

import {Injectable} from '@angular/core';
import {RaceClass} from "./raceclass";
import {RACECLASSES} from "../data/raceclasses";

@Injectable()
export class RaceClassService{
  public getRaceClasses(): RaceClass[]{
    return RACECLASSES;
  }
  public getRaceClass(id: number) {
    return this.getRaceClasses().filter(rc=>rc.id==id).pop();
  }
}
