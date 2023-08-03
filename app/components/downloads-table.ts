import Component from '@glimmer/component';
import { SelectableFileData } from 'takehome/routes';

interface DownloadsTableArgs {
  files: SelectableFileData[];
}

export default class DownloadsTable extends Component<DownloadsTableArgs> {}
