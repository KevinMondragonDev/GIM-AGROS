import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MISSION, VISION } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-purpose',
  imports: [RevealDirective],
  templateUrl: './purpose.html',
  styleUrl: './purpose.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Purpose {
  protected readonly mission = MISSION;
  protected readonly vision = VISION;
}
