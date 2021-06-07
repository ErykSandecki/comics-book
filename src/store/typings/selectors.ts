import composeFp from 'lodash/fp/compose';
import getFp from 'lodash/fp/get';
import isArrayFp from 'lodash/fp/isArray';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TTypingsState } from './types';

export const typingsSelector: Selector<TMainState, TTypingsState> =
  getFp(REDUCER_KEY);

export const isPendingSelector: Selector<TMainState, boolean | undefined> =
  createSelector(typingsSelector, getFp('isPending'));

export const typingsLoadedSelector: Selector<TMainState, boolean> =
  createSelector(typingsSelector, composeFp(isArrayFp, getFp('typings')));

  export const getAttributeFromTypings = (
    attribute: string
  ): Selector<TMainState, any> =>
    createSelector(typingsSelector, getFp(attribute));