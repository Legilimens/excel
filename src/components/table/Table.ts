import { ExcelComponent } from '@/core';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  // eslint-disable-next-line class-methods-use-this
  toHtml() {
    return `
      <div class="row">
        <div class="row_info"></div>
        <div class="row_data">
          <div class="column">A</div>
          <div class="column">B</div>
          <div class="column">C</div>
        </div>
      </div>
      <div class="row">
        <div class="row_info">1</div>
        <div class="row_data">
          <div contenteditable="true" class="cell selected">A1</div>
          <div contenteditable="true" class="cell">B1</div>
          <div contenteditable="true" class="cell">C1</div>
        </div>
      </div>
      <div class="row">
        <div class="row_info">2</div>
        <div class="row_data">
          <div contenteditable="true" class="cell">A2</div>
          <div contenteditable="true" class="cell">B2</div>
          <div contenteditable="true" class="cell">C2</div>
        </div>
      </div>
    `;
  }
}
