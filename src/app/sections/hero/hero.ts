import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO_FACTS } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly facts = HERO_FACTS;
}
