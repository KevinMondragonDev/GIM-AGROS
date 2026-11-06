import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_PILLARS } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly pillars = ABOUT_PILLARS;
}
