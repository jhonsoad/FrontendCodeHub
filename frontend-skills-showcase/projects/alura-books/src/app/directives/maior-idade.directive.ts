import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({ // diretivas personalizadas
  selector: '[maiorIdadeValidator]',
  providers: [{ //Registra a diretiva como um validador no provedor de validadores (NG_VALIDATORS)
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator { // Implementa a interface Validator que exige a implementação do método validate.

  // constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoNascMais18 = anoNascimento + 18;
    const anoAtual = new Date().getFullYear();

    const ehMaior = anoNascMais18 <= anoAtual;

    return ehMaior ? null : {'maiorIdadeValidator': true};
  }
}
