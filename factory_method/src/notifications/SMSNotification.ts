// Importa a classe abstrata Notification
import { Notification } from "./Notification";

// Classe que representa a notificação via SMS.
// O método send() simula o envio de uma mensagem SMS.
export class SMSNotification extends Notification {
  send(message: string): void {
    // Em um cenário real, aqui haveria a integração com um gateway de SMS.
    console.log("[SMSNotification] Enviando SMS com a mensagem: " + message);
  }
}
