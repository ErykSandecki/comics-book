import composeFp from 'lodash/fp/compose';
import findFp from 'lodash/fp/find';
import getFp from 'lodash/fp/get';
import headFp from 'lodash/head';
import isArrayFp from 'lodash/fp/isArray';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TChannel, TChannelsState } from './types';

export const channelsSelector: Selector<TMainState, TChannelsState> =
  getFp(REDUCER_KEY);

export const isPendingSelector: Selector<TMainState, boolean | undefined> =
  createSelector(channelsSelector, getFp('isPending'));

export const channelsLoadedSelector: Selector<TMainState, boolean> =
  createSelector(channelsSelector, composeFp(isArrayFp, getFp('channels')));

export const getDefaultChannelId: Selector<TMainState, TChannel> =
  createSelector(
    channelsSelector,
    composeFp(getFp('channelId'), headFp, getFp('channels'))
  );

export const getAttributeFromChannels = (
  attribute: string
): Selector<TMainState, any> =>
  createSelector(channelsSelector, getFp(attribute));

// @ts-ignore
export const getAttributesFromSelectedChannel: Selector<TMainState, TChannel> =
  createSelector(channelsSelector, ({ channels, selectedChannelId }) =>
    findFp(({ channelId }) => channelId === selectedChannelId, channels)
  );

export const getAttributeFromSelectedChannel = (
  attribute: string
): Selector<TMainState, any> =>
  createSelector(getAttributesFromSelectedChannel, getFp(attribute));
