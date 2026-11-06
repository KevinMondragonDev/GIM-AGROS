import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT, INTEREST_OPTIONS } from '../../content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly interests = INTEREST_OPTIONS;
  protected readonly status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly submitted = signal(false);

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    location: [''],
    interest: [INTEREST_OPTIONS[0]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected invalid(control: keyof typeof this.form.controls): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || this.submitted());
  }

  /**
   * Envía la solicitud con Web3Forms, que la reenvía a CONTACT.email.
   * Si aún no hay clave configurada, abre la app de correo del visitante.
   */
  protected async submit(isBot: boolean): Promise<void> {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (isBot) return;

    const { name, email, phone, location, interest, message } = this.form.getRawValue();
    const subject = `Solicitud de información — ${name}`;

    if (!this.contact.web3formsKey) {
      const body = [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        phone && `Teléfono: ${phone}`,
        location && `Ubicación: ${location}`,
        `Motivo: ${interest}`,
      ]
        .filter(Boolean)
        .concat('', message)
        .join('\n');
      window.location.href = `mailto:${this.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.status.set('sent');
      return;
    }

    this.status.set('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.contact.web3formsKey,
          subject,
          from_name: 'Sitio web GIM AGROS',
          replyto: email,
          Nombre: name,
          Correo: email,
          Teléfono: phone || '—',
          'Municipio o región': location || '—',
          Motivo: interest,
          Mensaje: message,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      this.status.set(response.ok && result.success ? 'sent' : 'error');
    } catch {
      this.status.set('error');
    }
  }

  protected reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.status.set('idle');
  }
}
