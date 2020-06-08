import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { SharedModule } from 'app/shared/shared.module';
import { FilterClassesService } from './services/filter-classes.service';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [SharedModule],
  exports: [CatalogComponent],
  declarations: [CatalogComponent, OrderByPipe],
  providers: [CatalogRepositoryService, FilterClassesService],
})
export class CatalogModule {}
