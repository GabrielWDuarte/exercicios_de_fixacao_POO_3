// Arquivo principal para testar a plataforma de streaming.
import { MediaFactory } from "./MediaFactory";

function main() {
  try {
    // Altere o valor para "audio", "video" ou "podcast" para testar.
    const mediaType = "video";

    // Cria a mídia adequada usando a fábrica.
    const media = MediaFactory.createMedia(mediaType);

    // Simula a reprodução da mídia.
    media.play();

    // Depois, simula a parada.
    media.stop();
  } catch (error) {
    console.error("Erro ao reproduzir mídia:", error);
  }
}

// Executa a função de teste.
main();
