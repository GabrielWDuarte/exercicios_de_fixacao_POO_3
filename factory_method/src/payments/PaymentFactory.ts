// Essa fábrica cria a forma de pagamento adequada
// com base no método passado como parâmetro.
import { Payment } from "./Payment";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { BoletoPayment } from "./BoletoPayment";

export class PaymentFactory {
  public static createPayment(method: string): Payment {
    const lowerMethod = method.toLowerCase();

    switch (lowerMethod) {
      case "creditcard":
        return new CreditCardPayment();
      case "paypal":
        return new PayPalPayment();
      case "boleto":
        return new BoletoPayment();
      default:
        // Se o método não for reconhecido, lançamos um erro.
        throw new Error("Método de pagamento inválido! Opções: 'creditcard', 'paypal', 'boleto'.");
    }
  }
}
