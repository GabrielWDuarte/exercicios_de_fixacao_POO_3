// Essa classe é responsável por criar a notificação correta,
// utilizando o padrão Factory Method.
import { Notification } from "./Notification";
import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";

export class NotificationFactory {
  // O método createNotification recebe uma string indicando o tipo.
  // Com base nela, retorna a instância apropriada.
  public static createNotification(type: string): Notification {
    const lowerType = type.toLowerCase(); // Normaliza para evitar problemas com maiúsculas/minúsculas

    if (lowerType === "email") {
      return new EmailNotification();
    } else if (lowerType === "sms") {
      return new SMSNotification();
    } else {
      // Se for passado um tipo inválido, lançamos um erro.
      throw new Error("Tipo de notificação inválido. Use 'email' ou 'sms'.");
    }
  }
}
