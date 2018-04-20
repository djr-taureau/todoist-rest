/**
 * A Todoist Label.
 */
export interface ILabel {
  /** Label id. */
  id: number;
  /** Label name. */
  name: string;
  /** Number used by clients to sort list of labels. */
  order: number;
}

export interface ILabelCreate {
  /** Name of the label. */
  name: string;
  /** Label order. */
  order?: number;
}

export interface ILabelUpdate extends Partial<ILabelCreate> {}
