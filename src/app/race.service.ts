/**
 * Created by firionel on 3/7/17.
 */
import {Injectable} from '@angular/core';
import {Race} from "./race";
import {RACES} from "../data/races";
import {RaceClass} from "./raceclass";

@Injectable()
export class RaceService{
  public getRaces(): Race[]{
    return RACES;
  }
  public getRace(id: number): Race{
    return this.getRaces().filter(race=>race.id==id).pop();
  }
  public getRacesForRaceClass(raceClassId: number): Race[]{
    return this.getRaces().filter(race=>race.raceClass.id==raceClassId);
  }
  public getRacesForRaceClas(raceClass: RaceClass): Race[]{
    return this.getRaces().filter(race=>race.raceClass==raceClass);
  }
}
