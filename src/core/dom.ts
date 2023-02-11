class Dom {
  private _$el: Element;

  constructor(selector: HTMLElement | string) {
    this._$el =
      selector instanceof HTMLElement
        ? selector
        : (document.querySelector(selector) as Element);
  }

  public html(innerHtml?: string) {
    if (innerHtml && this._$el) {
      this._$el.innerHTML = innerHtml;
      return this;
    }
    return this._$el?.outerHTML.trim();
  }

  public clear() {
    this.html('');
    return this;
  }

  public append(node: Dom | Element) {
    this._$el?.append(node instanceof Dom ? node._$el : node);

    return this;
  }

  public on(eventType: keyof HTMLElementEventMap, cb: () => void) {
    this._$el.addEventListener(eventType, cb);
  }

  public off(eventType: keyof HTMLElementEventMap, cb: () => void) {
    this._$el.removeEventListener(eventType, cb);
  }
}

export type TDom = Dom;

export function $(selector: HTMLElement | string) {
  return new Dom(selector);
}

$.create = (
  tagName: keyof HTMLElementTagNameMap,
  classes: string[] = [],
): Dom => {
  const $el: HTMLElement = document.createElement(tagName);
  if (classes.length) {
    $el.classList.add(classes.join(' '));
  }
  return $($el);
};
