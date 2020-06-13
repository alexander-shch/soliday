import Http from './http';
import { BehaviorSubject } from 'rxjs';

const authState = new BehaviorSubject<string>('');

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
      authState.next(token);
      return token;
    })
    .catch(console.error);
}

export default authState;
