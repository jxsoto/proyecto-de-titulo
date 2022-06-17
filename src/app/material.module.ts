import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card"

const myModules: any[] = [MatInputModule,MatCardModule];

@NgModule({

    imports: [...myModules],
    exports: [...myModules],
})

export class MaterialModule{}