// Essa fábrica cria a mídia correta com base no tipo informado.
import { Media } from "./Media";
import { AudioMedia } from "./AudioMedia";
import { VideoMedia } from "./VideoMedia";
import { PodcastMedia } from "./PodcastMedia";

export class MediaFactory {
  public static createMedia(type: string): Media {
    const lowerType = type.toLowerCase();

    switch (lowerType) {
      case "audio":
        return new AudioMedia();
      case "video":
        return new VideoMedia();
      case "podcast":
        return new PodcastMedia();
      default:
        // Se o tipo não for reconhecido, mostramos um erro.
        throw new Error("Tipo de mídia inválido! Use 'audio', 'video' ou 'podcast'.");
    }
  }
}
