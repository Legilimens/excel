export abstract class DOMListener {
  private _$root;

  // по факту в $root тип Dom, что не очень хорошо
  // TODO: переделать
  constructor($root: any) {
    if (!$root) {
      throw Error('You need provide the $root for DomListener!');
    }
    this._$root = $root;
  }
}
