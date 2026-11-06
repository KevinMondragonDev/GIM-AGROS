import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Logotipo horizontal de GIM AGROS. Siempre conserva sus colores:
 * `dark` es la versión para fondos claros y `light` la misma versión
 * sobre una placa crema para fondos oscuros. Archivos en public/brand/.
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<img [src]="file().src" alt="GIM AGROS" [width]="file().width" [height]="file().height" />`,
  styles: `
    :host {
      display: inline-block;
      height: var(--logo-h, 48px);
    }

    img {
      width: auto;
      height: 100%;
    }
  `,
})
export class Logo {
  readonly tone = input<'dark' | 'light'>('dark');

  protected readonly file = computed(() =>
    this.tone() === 'light'
      ? { src: 'brand/gim-agros-logo-fondo-oscuro.svg', width: 1504, height: 671 }
      : { src: 'brand/gim-agros-logo.svg', width: 1408, height: 591 },
  );
}
