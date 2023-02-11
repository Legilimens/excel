import { DOMListener } from '@core/DOMListener';

import type { TDom } from '@core/dom';
import type { TExcelComponentOptions } from '@core/types';

export class ExcelComponent extends DOMListener {
  constructor(
    _$root: TDom,
    options: TExcelComponentOptions = {
      name: '',
      listeners: [],
    },
  ) {
    super(_$root, options.listeners);
    this.name = options.name || '';
  }

  public init() {
    this.initDOMListener();
  }

  public destroy() {
    this.removeDOMListener();
  }

  public toHtml() {
    return 'Base Excel Component';
  }
}
