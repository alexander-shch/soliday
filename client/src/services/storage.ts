import { addNotification } from '../services/notifications/notifications';

export enum StorageField {
  TOKEN = 'token',
}

class StorageController {
  private storage = localStorage;

  error(error: Error, message: string) {
    if (process.env.development) {
      console.error(error);
      addNotification(message, 'danger');
    }
  }

  set<T>(field: StorageField, data: string | number | object | T) {
    try {
      this.storage.setItem(field, JSON.stringify(data));
    } catch (e) {
      this.error(e, `Error: Trying to save ${field} with ${data}`);
    }
  }

  get(field: StorageField) {
    try {
      const result = this.storage.getItem(field);
      return result && JSON.parse(result);
    } catch (e) {
      this.error(e, `Error: Trying to get ${field}`);
    }
  }
}

const storage = new StorageController();

export default storage;
