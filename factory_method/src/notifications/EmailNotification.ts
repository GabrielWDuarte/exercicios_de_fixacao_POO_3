// Importa a classe abstrata Notification
import { Notification } from "./Notification";

// Classe que representa a notificação via e-mail.
// Aqui implementamos o método send() para simular o envio de um e-mail.
export class EmailNotification extends Notification {
  send(message: string): void {
    // Aqui, normalmente, você integraria com um serviço de e-mail.
    console.log("[EmailNotification] Enviando e-mail com a mensagem: " + message);
  }
}
