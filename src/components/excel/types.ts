import { Header, Toolbar, Formula, Table } from '@/components';

export type TComponent =
  | typeof Header
  | typeof Toolbar
  | typeof Formula
  | typeof Table;

export const isComponentInStickyHeader = (
  Component: Header | Toolbar | Formula,
): Component is Header | Toolbar | Formula =>
  Component !== null &&
  (Component instanceof Header ||
    Component instanceof Toolbar ||
    Component instanceof Formula);
