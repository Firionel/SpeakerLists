import {Heat} from "./heat";
import {Participant} from "./participant";
import {TimeInterval} from "rxjs";
/**
 * Created by firionel on 3/5/17.
 */


export class HeatResult{
  heat: Heat;
  participant: Participant;
  position: number;
  points: number;
  time: string;
}
