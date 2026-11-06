import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_PILLARS } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';

const WIDTH = 480;
const HEIGHT = 360;
const HORIZON = 132;

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly pillars = ABOUT_PILLARS;
  protected readonly horizon = HORIZON;

  /**
   * Surcos en perspectiva: triángulos que parten del borde inferior
   * y convergen en un punto de fuga sobre el horizonte.
   */
  protected readonly furrows = Array.from({ length: 22 }, (_, k) => {
    const i = k - 11;
    const vanishX = WIDTH / 2;
    const a = vanishX + i * 58;
    const b = vanishX + (i + 1) * 58;
    return {
      points: `${a},${HEIGHT} ${b},${HEIGHT} ${vanishX},${HORIZON}`,
      dark: k % 2 === 0,
    };
  });

  /** Línea de árboles lejana sobre el horizonte. */
  protected readonly treeline = (() => {
    let d = `M0 ${HORIZON}`;
    for (let x = 0; x <= WIDTH; x += 12) {
      const h = 4 + ((x * 37) % 9);
      d += ` Q${x + 6} ${HORIZON - h} ${x + 12} ${HORIZON}`;
    }
    return `${d} Z`;
  })();
}
