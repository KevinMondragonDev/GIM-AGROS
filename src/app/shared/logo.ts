import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Logotipo horizontal de GIM AGROS.
 * `dark` es la versión a color para fondos claros; `light` es el negativo
 * para fondos oscuros. Los archivos viven en public/brand/.
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<img [src]="src()" alt="GIM AGROS" width="1408" height="591" />`,
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

  protected readonly src = computed(() =>
    this.tone() === 'light' ? 'brand/gim-agros-logo-negativo.svg' : 'brand/gim-agros-logo.svg',
  );
}
