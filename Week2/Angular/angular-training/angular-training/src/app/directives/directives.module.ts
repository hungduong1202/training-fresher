import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { FormsModule } from '@angular/forms';
import { DemoNgContentComponent } from './demo-ng-content/demo-ng-content.component';

@NgModule({
  declarations: [DirectivesComponent, DemoNgContentComponent],
  imports: [CommonModule, FormsModule],
  exports: [DirectivesComponent],
})
export class DirectivesModule {}
