import Http from './http';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { User } from '../../../server/src/models/user';
import storage, { StorageField } from './storage';

interface Auth {
  token?: string;
  user?: User;
}

const authState = new BehaviorSubject<Auth>({});

export function logIn(email: string, password: string) {
  return Http<{ token: string }>({
    url: 'login',
    method: 'post',
    data: {
      email,
      password,
    },
  })
    .then(({ token }) => {
      storage.set(StorageField.TOKEN, token);
      authState.next({
        token,
      });
      return token;
    })
    .catch(console.error);
}

export function getUserData(id: string = '') {
  return Http<User>({
    url: `user/${id}`,
    method: 'get',
  })
    .then((user) => {
      authState.pipe(take(1)).subscribe((authData) => {
        authState.next({
          ...authData,
          user,
        });
      });
      return user;
    })
    .catch(console.error);
}

export default authState;
