import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CONTACT, NAV_LINKS } from '../../content';
import { Logo } from '../../shared/logo';

@Component({
  selector: 'app-site-header',
  imports: [Logo],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'close()',
  },
})
export class SiteHeader {
  protected readonly links = NAV_LINKS;
  protected readonly contact = CONTACT;
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);
  protected readonly active = signal('');

  private readonly doc = inject(DOCUMENT);

  constructor() {
    effect(() => this.doc.body.classList.toggle('no-scroll', this.open()));

    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.onScroll();

      // Resalta en el menú la sección que se está leyendo.
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      this.doc.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
