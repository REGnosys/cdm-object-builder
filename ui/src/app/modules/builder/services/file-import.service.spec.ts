import { TestBed } from '@angular/core/testing';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

import { FileImportService } from './file-import.service';

describe('FileImportService', () => {
  let service: FileImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [MatSnackBarModule] });
    service = TestBed.inject(FileImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
