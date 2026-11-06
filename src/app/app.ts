import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Purpose } from './sections/purpose/purpose';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';
import { Values } from './sections/values/values';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, About, Purpose, Values, Contact, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-site-header />
    <main>
      <app-hero />
      <app-about />
      <app-purpose />
      <app-values />
      <app-contact />
    </main>
    <app-site-footer />
  `,
})
export class App {}
