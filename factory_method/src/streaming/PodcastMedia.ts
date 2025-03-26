// Implementa o comportamento para mídias do tipo podcast.
import { Media } from "./Media";

export class PodcastMedia implements Media {
  play(): void {
    console.log("[PodcastMedia] Reproduzindo podcast...");
  }

  stop(): void {
    console.log("[PodcastMedia] Podcast parado.");
  }
}
