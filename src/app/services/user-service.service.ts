import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  colorHasChanged: Subject<string> = new Subject<string>();

  userList = [
    'Tucker Anselm',
    'Elmira Keddy',
    'Eveline Grandisson',
    'Berry Wildes',
    'Quintus Hastings',
    'Harp Antonignetti',
    'Vite Playfair',
    'Noelle Dowears',
    'Delcine Lubbock',
    'Auberta Skerrett',
    'Constantin Cosgry',
    'Loleta Grenfell',
    'Nadeen Matchett',
    'Elli Galliver',
    'Gayla Hawtin',
    'Liam Antwis',
    'Merilyn Baumford',
    'Lilas Colquyte',
    'Roi Kinworthy',
    'Patin Flecknoe',
    'Etienne Vedeneev',
    'Diane Evesque',
    'Ashlee Amoore',
    'Julissa Bandey',
    'Merridie McPartling',
    'Nanete Kitlee',
  ];

  editUser = (index: number, name: string) => {
    this.userList[index] = name;
  };

  deleteUser = (index: number) => {
    this.userList.splice(index, 1);
  };
}
