import { ExcelComponent } from '@/core';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  // eslint-disable-next-line class-methods-use-this
  toHtml() {
    return `
      <div class="info">fx</div>
      <div contenteditable class="input" spellcheck="false"></div>
    `;
  }
}
