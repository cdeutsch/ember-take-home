import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { SelectableFileData } from 'takehome/routes';

interface FilesTableArgs {
  files: SelectableFileData[];
}

export default class FilesTable extends Component<FilesTableArgs> {
  @tracked files = this.args.files.map((file) => ({ ...file }));

  get selectedText(): string {
    if (this.selectedFiles.length > 0) {
      return `Selected ${this.selectedFiles.length}`;
    } else {
      return 'None Selected';
    }
  }

  get selectedFiles(): SelectableFileData[] {
    return this.files.filter((file) => file.isSelected);
  }

  @action
  downloadSelected() {
    alert('Download Selected');
  }

  @action
  toggleSelection(file: SelectableFileData, isSelected: boolean) {
    file.isSelected = isSelected;

    this.files = [...this.files];
  }
}
