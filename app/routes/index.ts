import Route from '@ember/routing/route';

export type StatusType = 'scheduled' | 'available';

export interface FileData {
  name: string;
  device: string;
  path: string;
  status: StatusType;
}

export interface SelectableFileData extends FileData {
  isSelected: boolean;
}

export default class Index extends Route {
  async model(): Promise<SelectableFileData[]> {
    const response = await fetch('/api/files.json');
    const files: FileData[] = await response.json();

    // Add default value for isChecked to each file.
    return files.map<SelectableFileData>((file) => ({
      ...file,
      isSelected: false,
    }));
  }
}
