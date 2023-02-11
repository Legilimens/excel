import { $ } from '@/core/dom';
import { isComponentInStickyHeader } from '@/components/excel/types';

import type { TComponentClass, TComponent } from '@/components/excel/types';

export class Excel {
  _$el;

  private _components: TComponentClass[];

  private _componentInstances: TComponent[];

  constructor(
    selector: string,
    options: Record<'components', TComponentClass[]>,
  ) {
    this._$el = $(selector);
    this._components = options.components;
    this._componentInstances = [];
  }

  private _getRoot() {
    const $root = $.create('div', ['excel']);

    const $stickyHeader = $.create('div', ['excel__sticky-header']);

    $root.append($stickyHeader);

    this._componentInstances = this._components.map(
      (Component: TComponentClass) => {
        const $el = $.create('div', [Component.className]);
        const component = new Component($el);
        $el.html(component.toHtml());

        if (isComponentInStickyHeader(component)) {
          $stickyHeader.append($el);
        } else {
          $root.append($el);
        }
        return component;
      },
    );

    return $root;
  }

  public render() {
    this._$el?.append(this._getRoot());

    this._componentInstances.forEach((component) => component.init());
  }
}
