/**
 * Created by firionel on 3/5/17.
 */

import {Injectable} from '@angular/core';
import {Club} from './club';
import {CLUBS} from "../data/clubs";

@Injectable()
export class ClubService{
  getClubs(): Club[] {
    return CLUBS;
  };
  getClub(id:number): Club{
    return this.getClubs().filter(club=>club.id==id).pop()
  }
}
