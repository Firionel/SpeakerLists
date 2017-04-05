import {Race} from "./race";
import {Participant} from "./participant";
/**
 * Created by firionel on 3/5/17.
 */

export class RaceResult{
  get race(): Race {
    return this._race;
  }
  get participant(): Participant {
    return this._participant;
  }
  private _raceId: number;
  private _race:Race;
  private _participantId: number;
  private _participant: Participant;
  position: number;
  points: number;
  time: string;
}
