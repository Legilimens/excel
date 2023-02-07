import { ExcelComponent } from '@/core';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  // eslint-disable-next-line class-methods-use-this
  toHtml() {
    return `
      <input type="text" class="input" value="Новая таблица" />
      <div class="buttons">
        <div class="button">
          <span class="material-symbols-outlined">delete</span>
        </div>
        <div class="button">
          <span class="material-symbols-outlined">close</span>
        </div>
      </div>
    `;
  }
}
