import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getInteractionByName, Interaction } from '../../../../lib/interaction'
import { Line } from '../../../../lib/line';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  interaction$: BehaviorSubject<Interaction>

  constructor() {
    this.interaction$ = new BehaviorSubject(new Interaction("", []))
  }

  loadExampleInteraction(name: string) {
    this.interaction$.next(getInteractionByName(name))
  }

  update(old: Line, current: Line) {
    if (old.equals(current)) {
      return this.interaction$.value
    }

    let currentInteraction = this.interaction$.value;
    currentInteraction.update(old, current)
    this.interaction$.next(currentInteraction)
    return currentInteraction
  }
}