// Implementa o comportamento para mídias do tipo áudio.
import { Media } from "./Media";

export class AudioMedia implements Media {
  play(): void {
    console.log("[AudioMedia] Reproduzindo áudio...");
  }

  stop(): void {
    console.log("[AudioMedia] Áudio parado.");
  }
}
