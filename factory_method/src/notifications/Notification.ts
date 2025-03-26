// precisará implementar o método send().
export abstract class Notification {
    // Método que envia a mensagem. Cada notificação vai ter sua implementação.
    abstract send(message: string): void;
  }
  