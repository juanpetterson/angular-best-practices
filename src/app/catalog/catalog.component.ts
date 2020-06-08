import { Component, OnInit } from '@angular/core';

import { CatalogRepositoryService } from './catalog-repository.service';
import { UserRepositoryService } from 'app/services/user-repository.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  classes: any[];
  visibleClasses: any[];

  constructor(
    private catalogRepositoryService: CatalogRepositoryService,
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
      }, //add a toast message or something
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
      }, //add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }

  applyFilter(filter) {
    if (!filter) return (this.visibleClasses = this.classes);

    if (filter === 'GEN') {
      return (this.visibleClasses = this.classes.filter(
        (c) =>
          !c.course.courseNumber.startsWith('CH') &&
          !c.course.courseNumber.startsWith('PO') &&
          !c.course.courseNumber.startsWith('SP')
      ));
    }

    return (this.visibleClasses = this.classes.filter((c) =>
      c.course.courseNumber.startsWith(filter)
    ));
  }
}