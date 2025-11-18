import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TabularViewComponent } from './tabular-view.component';
import { TabularViewerInput } from '../../models/builder.model';

describe('TabularViewComponent', () => {
  let component: TabularViewComponent;
  let fixture: ComponentFixture<TabularViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabularViewComponent],
      schemas:[NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TabularViewComponent);
    component = fixture.componentInstance;
    const input: TabularViewerInput = {
      cdmJson: sampleJson,
      // The TabularViewComponent currently only uses cdmJson to build its grid;
      // rootNode is passed through for future use, so a minimal stub is sufficient here.
      rootNode: {} as any,
    };
    component.tabularInput = input;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const sampleJson = {
    meta: {
      externalKey: 'party2',
      globalKey: '490e5f44',
    },
    name: {
      value: 'Party B',
    },
    partyId: [
      {
        identifier: {
          meta: {
            scheme: 'http://www.fpml.org/coding-scheme/external/iso17442',
          },
          value: '48750084UKLVTR22DS78',
        },
        identifierType: 'LEI',
        meta: {
          globalKey: 'de31bddc',
        },
      },
    ],
    person: [
      {
        firstName: 'John',
        surname: 'Doe',
        dateOfBirth: '1980-01-01',
        personId: [
          {
            value: {
              identifier: {
                value: 'jdoe',
              },
              meta: {
                globalKey: 'baeb8c0d',
              },
            },
          },
        ],
      },
    ],
  };
});
