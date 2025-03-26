// Implementa o pagamento via boleto bancário.
import { Payment } from "./Payment";

export class BoletoPayment implements Payment {
  processPayment(amount: number): void {
    // Aqui, normalmente, você geraria um boleto com código de barras, etc.
    console.log(`[Boleto] Pagamento de R$${amount.toFixed(2)} gerado via Boleto!`);
  }
}
