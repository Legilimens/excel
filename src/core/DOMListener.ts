/* eslint-disable @typescript-eslint/ban-ts-comment */
// TODO: разобраться с ts-ignore

import type { TDom } from '@core/dom';
import type { TListener } from '@core/types';
import { getEventCbTitle } from './utils';

export abstract class DOMListener {
  private _$root;

  private _listeners;

  public name: string | undefined;

  constructor($root: TDom, listeners: TListener[] = []) {
    if (!$root) {
      throw Error('You need provide the $root for DomListener!');
    }
    this._$root = $root;
    this._listeners = listeners;
  }

  public initDOMListener() {
    this._listeners.forEach((listener) => {
      const method = getEventCbTitle(listener);
      // @ts-ignore
      if (!this[method]) {
        throw new Error(
          `Method ${method} is not implemented for ${
            this.name || ''
          } component`,
        );
      }
      // @ts-ignore
      this[method] = this[method].bind(this);
      // @ts-ignore
      this._$root.on(listener, this[method]);
    });
  }

  public removeDOMListener() {
    this._listeners.forEach((listener) => {
      const method = getEventCbTitle(listener);
      // @ts-ignore
      this._$root.off(listener, this[method]);
    });
  }
}
