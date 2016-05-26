import { Component } from '@angular/core';
import './rxjs-operators';

import {ProductListComponent} from './product-list.component'

@Component({
    selector: 'my-app',
    template: `this is test page
                <br>
                <product-list></product-list>`,
    directives: [ProductListComponent]
})

export class AppComponent {

}