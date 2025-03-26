// Aqui definimos uma interface para pagamento.
// Qualquer forma de pagamento deverá implementar o método processPayment.
export interface Payment {
    processPayment(amount: number): void;
  }
  