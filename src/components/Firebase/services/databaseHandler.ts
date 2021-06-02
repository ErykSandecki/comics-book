// @ts-nocheck
// others
import { DatabaseColumns } from '../enums';

// services
import databaseErrorHandler from './databaseErrorHandler';
import databaseSuccessHandler from './databaseSuccessHandler';

const databaseHandler = (
  firebase: any,
  actions: (data: any) => void,
  ref: DatabaseColumns,
) => {
  firebase
    .database()
    .ref(ref)
    .on(
      'value',
      (response: any) => databaseSuccessHandler(response, actions),
      databaseErrorHandler
    );
};

export default databaseHandler;
