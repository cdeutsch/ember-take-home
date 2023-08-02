import { action } from '@ember/object';
import Component from '@glimmer/component';

import { SelectableFileData } from 'takehome/routes';

interface FilesTableRowArgs {
  file: SelectableFileData;
  onToggleSelection: (file: SelectableFileData, isSelected: boolean) => void;
}

export default class FilesTableRow extends Component<FilesTableRowArgs> {
  @action
  toggleSelection(event: Event) {
    const isSelected = (event.target as HTMLInputElement).checked;

    this.args.onToggleSelection(this.args.file, isSelected);
  }
}
