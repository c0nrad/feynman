import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getInteractionByName, Interaction } from '../../../../lib/interaction'
import { Line, Point } from '../../../../lib/line';

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

  removeLine(line: Line): Interaction {
    let interaction = this.interaction$.value
    interaction.lines = interaction.lines.filter((v) => {
      return v.id != line.id
    })


    this.interaction$.next(interaction)
    return interaction
  }

  addParticle(id: string) {
    let interaction = this.interaction$.value

    for (let i = 0; i < 20; i++) {
      if (interaction.vertex(new Point(i, 0)).lines.length == 0) {
        interaction.lines.push(new Line(i, 0, i + 1, 0, id))
        break
      }
    }

    this.interaction$.next(interaction)
    return interaction
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