import { ExcelComponent } from '@/core';

import type { TDom } from '@/core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor(_$root: TDom) {
    super(_$root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  // TODO: переделать тип
  onInput(e: any) {
    console.log(`Formula input: ${e.target.textContent.trim()}`);
  }

  public toHtml() {
    return `
      <div class="info">fx</div>
      <div contenteditable class="input" spellcheck="false"></div>
    `;
  }
}
