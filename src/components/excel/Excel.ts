import { $ } from '@/core/dom';
import {
  TComponent,
  isComponentInStickyHeader,
} from '@/components/excel/types';

export class Excel {
  _$el;

  private _components: TComponent[];

  constructor(selector: string, options: Record<'components', TComponent[]>) {
    this._$el = $(selector);
    this._components = options.components;
  }

  private _getRoot() {
    const $root = $.create('div', ['excel']);

    const $stickyHeader = $.create('div', ['excel__sticky-header']);

    $root.append($stickyHeader);

    this._components.forEach((Component: TComponent) => {
      const $el = $.create('div', [Component.className]);
      const component = new Component($el);
      $el.html(component.toHtml());

      if (isComponentInStickyHeader(component)) {
        $stickyHeader.append($el);
      } else {
        $root.append($el);
      }
    });

    return $root;
  }

  public render() {
    this._$el?.append(this._getRoot());
  }
}
