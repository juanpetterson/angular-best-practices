import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService],
})
export class CatalogModule {}
