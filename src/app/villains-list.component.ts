import { Component }  from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Villain, VillainsService } from './villains.service';

@Component({
  selector: 'villains-list',
  templateUrl: './villains-list.component.html',
  providers: [ VillainsService ]
})
export class VillainsListComponent {
  villains: Observable<Villain[]>;

  constructor(private villainsService: VillainsService) {
    this.villains = villainsService.getVillains();
  }
}
