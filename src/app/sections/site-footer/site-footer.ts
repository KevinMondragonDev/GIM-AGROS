import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT, NAV_LINKS, PHOTO_CREDITS } from '../../content';
import { Logo } from '../../shared/logo';

@Component({
  selector: 'app-site-footer',
  imports: [Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__main">
          <div class="footer__brand">
            <app-logo tone="light" />
            <p>Impulsamos el desarrollo agrícola.</p>
          </div>

          <nav class="footer__nav" aria-label="Pie de página">
            @for (link of links; track link.id) {
              <a [href]="'#' + link.id">{{ link.label }}</a>
            }
          </nav>

          <div class="footer__contact">
            @if (contact.email) {
              <span>Escríbenos</span>
              <a [href]="'mailto:' + contact.email">{{ contact.email }}</a>
            }
            <a href="#inicio" class="footer__up">
              Volver arriba
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 16V4m-5 5 5-5 5 5" fill="none" stroke="currentColor" stroke-width="1.6" /></svg>
            </a>
          </div>
        </div>

        <div class="footer__bottom">
          <span>© {{ year }} GIM AGROS. Comercialización de insumos agrícolas.</span>
          <span>
            Fotografías:
            @for (photo of photos; track photo.url; let last = $last) {
              <a [href]="photo.url" target="_blank" rel="noopener">{{ photo.author }}</a>{{ last ? '' : ', ' }}
            }
            en Unsplash.
          </span>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      position: relative;
      padding-top: clamp(4rem, 8vw, 6rem);
      padding-bottom: 2rem;
      background: var(--ink);
      color: var(--paper);
      overflow: hidden;

      // Franja con los tres colores del logotipo.
      &::before {
        content: '';
        position: absolute;
        inset: 0 0 auto;
        height: 6px;
        background: linear-gradient(90deg, var(--orange) 0 20%, var(--field-2) 20% 80%, var(--lime) 80%);
      }
    }

    .footer__main {
      display: grid;
      grid-template-columns: minmax(0, 6fr) minmax(0, 3fr) minmax(0, 3fr);
      gap: 3rem;
      align-items: start;
    }

    .footer__brand {
      --logo-h: clamp(84px, 10vw, 128px);

      p {
        margin-top: 1.5rem;
        font-family: var(--font-display);
        font-size: 1.35rem;
        font-weight: 500;
        opacity: 0.85;
      }
    }

    .footer__nav {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      a {
        font-size: 1rem;
        text-decoration: none;
        opacity: 0.75;
        transition: opacity 0.2s;

        &:hover {
          opacity: 1;
        }
      }
    }

    .footer__contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;

      span {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0.6;
      }

      a {
        text-decoration: none;
      }
    }

    .footer__up {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--orange);

      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    .footer__bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.5rem 2rem;
      margin-top: clamp(3rem, 6vw, 4.5rem);
      padding-top: 1.5rem;
      border-top: 1px solid var(--line-light);
      font-size: 0.85rem;
      opacity: 0.7;
    }

    @media (max-width: 860px) {
      .footer__main {
        grid-template-columns: 1fr 1fr;
      }

      .footer__brand {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 520px) {
      .footer__main {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class SiteFooter {
  protected readonly links = NAV_LINKS;
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
  protected readonly photos = PHOTO_CREDITS;
}
