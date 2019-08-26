import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component'

import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ServicesModule } from '../services/services.module';
import { AppRoutingModule } from '../app-routing.module';
import { loadSvgResources } from '../utils/sug.utils';
import 'rxjs/add/operator/take'

import 'hammerjs';
@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    BrowserAnimationsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: 'http://localhost:3000' }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经加载，不能再次加载！')
    }
    loadSvgResources(ir, ds)
  }
}
