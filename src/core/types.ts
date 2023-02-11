export type TListener = keyof HTMLElementEventMap;

export type TExcelComponentOptions = {
  name: string;
  listeners: TListener[];
};
