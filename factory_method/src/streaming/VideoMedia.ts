// Implementa o comportamento para mídias do tipo vídeo.
import { Media } from "./Media";

export class VideoMedia implements Media {
  play(): void {
    console.log("[VideoMedia] Reproduzindo vídeo...");
  }

  stop(): void {
    console.log("[VideoMedia] Vídeo parado.");
  }
}
