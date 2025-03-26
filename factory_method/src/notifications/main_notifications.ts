// Arquivo para testar o sistema de notificações.
// Aqui chamamos o Factory Method para criar a notificação desejada.
import { NotificationFactory } from "./NotificationFactory";

function main() {
  try {
    // Você pode mudar esse valor para "sms" para testar outro tipo.
    const notificationType = "email";

    // Cria a notificação com base no tipo informado.
    const notification = NotificationFactory.createNotification(notificationType);

    // Envia a notificação com a mensagem desejada.
    notification.send("Olá, esta é a sua notificação!");
  } catch (error) {
    console.error("Erro ao criar notificação:", error);
  }
}

// Executa a função principal para testar.
main();
