import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { SharedModule } from 'app/shared/shared.module';
import { FilterClassesService } from './services/filter-classes.service';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService, FilterClassesService],
})
export class CatalogModule {}
