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

  /** Curvas de nivel de fondo, como en un plano topográfico del terreno. */
  protected readonly contours = Array.from({ length: 18 }, (_, line) => {
    const base = 30 + line * 36;
    let d = '';
    for (let x = 0; x <= 1200; x += 24) {
      const y =
        base +
        Math.sin(x / 170 + line * 0.35) * 22 +
        Math.sin(x / 63 + line * 0.9) * 6 +
        Math.cos(x / 410 - line * 0.2) * 30;
      d += `${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)} `;
    }
    return d.trim();
  });
}
