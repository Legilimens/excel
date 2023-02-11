import { ExcelComponent } from '@/core';

import type { TDom } from '@/core/dom';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor(_$root: TDom) {
    super(_$root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  onClick(event: MouseEvent) {
    console.log(event.target);
  }

  // eslint-disable-next-line class-methods-use-this
  toHtml() {
    return `
      <div class="button">
      <span class="material-symbols-outlined">format_align_left</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_align_center</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_align_right</span>
      </div>

      <span class="separator">|</span>

      <div class="button">
        <span class="material-symbols-outlined">format_bold</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_italic</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_underlined</span>
      </div>
    `;
  }
}
