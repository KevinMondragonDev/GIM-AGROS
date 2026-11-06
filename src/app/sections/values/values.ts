import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VALUES } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-values',
  imports: [RevealDirective],
  templateUrl: './values.html',
  styleUrl: './values.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Values {
  protected readonly values = VALUES;
}
