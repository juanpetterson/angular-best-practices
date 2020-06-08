import { Component, OnInit } from '@angular/core';

import { CatalogRepositoryService } from './catalog-repository.service';
import { UserRepositoryService } from '../core/services/user-repository.service';
import { FilterClassesService } from './services/filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  classes: any[];
  visibleClasses: any[];

  constructor(
    private catalogRepositoryService: CatalogRepositoryService,
    private filterClassesService: FilterClassesService,
    public userRepositoryService: UserRepositoryService
  ) {}

  ngOnInit() {
    this.catalogRepositoryService.getCatalog().subscribe((classes) => {
      this.classes = classes;
      this.applyFilter('');
    });
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepositoryService.enroll(classToEnroll.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToEnroll.processing = false;
      }, // add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepositoryService.drop(classToDrop.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToDrop.processing = false;
      }, // add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }

  applyFilter(filter) {
    this.visibleClasses = this.filterClassesService.filterClasses(
      filter,
      this.classes
    );
  }
}
