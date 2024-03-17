import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [ 
  ],
  declarations: [],
})
export class MaterialModule {}
