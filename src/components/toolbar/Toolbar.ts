import { ExcelComponent } from '@/core';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

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
