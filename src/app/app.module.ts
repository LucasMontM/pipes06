import { FiltroArrayPipe } from './filtro-array.pipe';
import { SettingService } from './setting.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
   /* {
      provide: LOCALE_ID,
      useValue: 'pt',
    }
    SettingService,
    {
      provide: LOCALE_ID,
      deps: [SettingService],
      useFactory:(SettingService: { getLocale: () => 'pt-BR'; }) => SettingService.getLocale(),
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
