/**
 * Created by firionel on 3/7/17.
 */

import {Injectable} from '@angular/core';
import {ClubService} from "./club.service";
import {RaceService} from "./race.service";
import {RaceClassService} from "./raceclass.service";


@Injectable()
export class ModelService{
  clubService = new ClubService();
  raceService = new RaceService();
  raceClassService = new RaceClassService();
}
