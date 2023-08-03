import { action } from '@ember/object';
import Component from '@glimmer/component';

import { SelectableFileData } from 'takehome/routes';

interface FilesTableRowArgs {
  file: SelectableFileData;
  onToggleSelection: (file: SelectableFileData, isSelected: boolean) => void;
}

export default class FilesTableRow extends Component<FilesTableRowArgs> {
  // FUTURE: Is there a better way to handle multiple dynamic classes?
  get rowClassName() {
    return [
      this.args.file.status,
      this.args.file.isSelected ? 'selected' : '',
    ].join(' ');
  }

  @action
  toggleSelection(event: Event) {
    const isSelected = (event.target as HTMLInputElement).checked;

    this.args.onToggleSelection(this.args.file, isSelected);
  }
}
