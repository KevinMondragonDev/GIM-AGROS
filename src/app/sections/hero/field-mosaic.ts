import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Parcel {
  points: string;
  fill: string;
}

/**
 * Vista aérea de un mosaico de parcelas, con un campo de riego por pivote
 * central cuyo brazo gira lentamente.
 */
@Component({
  selector: 'app-field-mosaic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './field-mosaic.html',
  styleUrl: './field-mosaic.scss',
})
export class FieldMosaic {
  protected readonly parcels: Parcel[] = [
    { points: '0,0 252,0 238,186 0,204', fill: 'url(#fm-wheat)' },
    { points: '262,0 600,0 600,140 249,168', fill: 'url(#fm-green)' },
    { points: '0,214 237,196 228,400 0,412', fill: 'url(#fm-soil)' },
    { points: '247,178 600,150 600,430 238,404', fill: 'url(#fm-field)' },
    { points: '0,422 228,410 225,560 0,575', fill: 'url(#fm-moss)' },
    { points: '0,585 225,570 220,720 0,720', fill: 'url(#fm-young)' },
    { points: '238,414 600,440 600,560 232,540', fill: 'url(#fm-straw)' },
    { points: '232,550 600,570 600,720 230,720', fill: 'url(#fm-clay)' },
  ];

  /** Surcos concéntricos del pivote. */
  protected readonly rings = Array.from({ length: 10 }, (_, i) => 108 - i * 10);

  /** Hilera de árboles entre dos parcelas, como cortina rompevientos. */
  protected readonly trees = Array.from({ length: 16 }, (_, i) => ({
    x: 8 + i * 14 + (i % 3) * 1.5,
    y: 417 - i * 0.55 + (i % 2 ? 1.5 : -1),
    r: 5 + ((i * 7) % 3),
  }));
}
