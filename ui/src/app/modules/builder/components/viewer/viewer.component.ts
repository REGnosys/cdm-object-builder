import { Component } from '@angular/core';
import { first, map, tap } from 'rxjs';
import { JsonExportService } from '../../services/json-export.service';
import { NodeDatabaseService } from '../../services/node-database.service';
import { JsonRootNode, TabularViewerInput } from '../../models/builder.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent {
  cdmJson: any = {};
  rootNode?: JsonRootNode;
  tabularInput?: TabularViewerInput;

  constructor(
    private jsonExportService: JsonExportService,
    private nodeDatabaseService: NodeDatabaseService
  ) {}

  refreshViewer() {
    this.nodeDatabaseService.nodeDataChange$
      .pipe(
        first(),
        map((nodeDataChange) => nodeDataChange.rootNode),
        tap((rootNode) => {
          this.rootNode = rootNode;
          this.cdmJson = this.jsonExportService.export(rootNode);
          this.tabularInput = {
            cdmJson: this.cdmJson,
            rootNode: rootNode,
          };
        })
      )
      .subscribe();
  }
}
