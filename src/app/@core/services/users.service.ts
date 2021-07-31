import { Injectable } from '@angular/core';
import { REGISTER_USER } from '@graphql/operations/mutations/user';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { ApiService } from '@graphql/services/api.service';
import { IRegisterForm } from '@shop/core/interfaces/register.interface';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  getUsers() {
    return this.get(USERS_LIST_QUERY, {
          include: true
    }).pipe(map((result: any) => {
      return result.users;
    }));
  }

  register(user: IRegisterForm) {
    return this.set(REGISTER_USER,
      {
        user,
        include: false
      }).pipe(
      map((result: any) => {
        return result.register;
      })
    );
  }
}
