import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO_FACTS } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';
import { FieldMosaic } from './field-mosaic';

@Component({
  selector: 'app-hero',
  imports: [FieldMosaic, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly facts = HERO_FACTS;
}
