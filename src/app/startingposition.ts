import {Heat} from "./heat";
import {Participant} from "./participant";
import {AppComponent} from "./app.component";
/**
 * Created by firionel on 3/5/17.
 */

export class StartingPosition{
  get participant(): Participant {
    return this._participant;
  }
  get heat(): Heat {
    return this._heat;
  }
  private _heatId: string;
  private _heat:Heat;
  private _participantId: number;
  private _participant:Participant;
  position: number;
}
