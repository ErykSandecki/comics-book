// @ts-nocheck
import { PutEffect } from 'redux-saga/effects';

export function* login(data: {
  payload: string;
}): Generator<PutEffect<any>> {
  const password = data.payload;

  try {
  } catch (error) {}
}
