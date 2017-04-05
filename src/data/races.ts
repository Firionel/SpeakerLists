import {Race} from "../app/race";
import {RaceValuationType} from "../app/racevaluationtype";
/**
 * Created by firionel on 3/7/17.
 */

export const RACES: Race[] =
  [
    new Race(1, "20000m Ausscheidung", 1, 1, RaceValuationType.Elimination)
    , new Race(2, "10000m Punkte", 1, 2, RaceValuationType.Points)
    , new Race(3, "500m", 1, 3, RaceValuationType.Flat)
    , new Race(4, "300m Einzelzeitfahren", 1, 4, RaceValuationType.TimeTrial)
    , new Race(1, "10000m Ausscheidung", 2, 1, RaceValuationType.Elimination)
    , new Race(2, "5000m Punkte", 2, 2, RaceValuationType.Points)
    , new Race(3, "500m", 2, 3, RaceValuationType.Flat)
    , new Race(4, "300m Einzelzeitfahren", 2, 4, RaceValuationType.TimeTrial)
  ]
