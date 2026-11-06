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
  protected readonly sent = signal(false);
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
   * Sin backend: arma un correo con los datos del formulario y lo abre en
   * el cliente de correo del visitante. Para recibir las solicitudes sin
   * depender de eso, conecta aquí un servicio de formularios o una API.
   */
  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, phone, location, interest, message } = this.form.getRawValue();
    const body = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      phone && `Teléfono: ${phone}`,
      location && `Ubicación: ${location}`,
      `Motivo: ${interest}`,
      '',
      message,
    ]
      .filter((line) => line !== '')
      .join('\n');

    const subject = `Solicitud de información — ${name}`;
    window.location.href = `mailto:${this.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.sent.set(true);
  }

  protected reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.sent.set(false);
  }
}
