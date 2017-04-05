import {Race} from "./race";
import {HeatRound} from "./heatround";
/**
 * Created by firionel on 3/5/17.
 */

export class Heat{
  get race(): Race {
    return this._race;
  }
  id: string;
  private _raceId: number;
  private _race: Race;
  heatRound: HeatRound;
  orderNumber: number;
}
