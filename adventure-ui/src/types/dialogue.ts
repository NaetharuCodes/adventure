export type LineType = 'prose' | 'dialogue';

export interface DialogueLine {
  text: string;
  type: LineType;
  speaker?: string;
}

export interface Scene {
  id: string;
  lines: DialogueLine[];
}