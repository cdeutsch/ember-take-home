import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { SelectableFileData } from 'takehome/routes';

interface FilesTableArgs {
  files: SelectableFileData[];
}

export default class FilesTable extends Component<FilesTableArgs> {
  @tracked files = this.args.files.map((file) => ({ ...file }));
  @tracked showDownloadModal = false;

  get toggleAllChecked(): boolean {
    return this.selectedFiles.length > 0;
  }

  get toggleAllIndeterminate(): boolean {
    return (
      this.selectedFiles.length > 0 &&
      this.selectedFiles.length < this.files.length
    );
  }

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

  get availableFiles(): SelectableFileData[] {
    return this.selectedFiles.filter((file) => file.status === 'available');
  }

  get scheduledFiles(): SelectableFileData[] {
    return this.selectedFiles.filter((file) => file.status === 'scheduled');
  }

  get hasAvailableFiles(): boolean {
    return this.availableFiles.length > 0;
  }

  get hasScheduledFiles(): boolean {
    return this.scheduledFiles.length > 0;
  }

  get noFilesSelected(): boolean {
    return this.selectedFiles.length === 0;
  }

  @action
  downloadSelected() {
    this.showDownloadModal = true;
  }

  @action
  hideDownloadModal() {
    this.showDownloadModal = false;
  }

  @action
  toggleAll(event: Event) {
    let newIsSelected = this.selectedFiles.length !== this.files.length;

    this.files.forEach((file) => (file.isSelected = newIsSelected));
    (event.target as HTMLInputElement).checked = newIsSelected;

    this.files = [...this.files.map((f) => ({ ...f }))];
  }

  @action
  toggleSelection(file: SelectableFileData, isSelected: boolean) {
    file.isSelected = isSelected;

    this.files = [...this.files.map((f) => ({ ...f }))];
  }
}
