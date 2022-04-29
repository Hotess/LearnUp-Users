import { InMemoryDbService } from 'angular-in-memory-web-api';
import { arrUsers, Users } from './users';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = arrUsers();

    return {users};
  }

  genId(heroes: Users[]): number {
    return arrUsers.length > 0 ? Math.max(...heroes.map(user => user.id)) + 1 : 11;
  }
}