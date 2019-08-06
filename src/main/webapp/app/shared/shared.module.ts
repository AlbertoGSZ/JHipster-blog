import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Blog2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Blog2SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Blog2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Blog2SharedModule {
  static forRoot() {
    return {
      ngModule: Blog2SharedModule
    };
  }
}
