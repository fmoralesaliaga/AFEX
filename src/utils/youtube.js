export function obtenerIdVideo(url) {
    const patron = /(?<=v=)[\w-]+|(?<=be\/)[\w-]+/;
    const id = url.match(patron);
    return id ? id[0] : false;
  }
  
  export function convertirDuracion(iso8601Duration) {
    const matches = iso8601Duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    let horas = matches[1] ? parseInt(matches[1].slice(0, -1)) : 0;
    let minutos = matches[2] ? parseInt(matches[2].slice(0, -1)) : 0;
    let segundos = matches[3] ? parseInt(matches[3].slice(0, -1)) : 0;
    return horas * 3600 + minutos * 60 + segundos;
  }
  
  export async function obtenerDatosVideoYoutube(videoId, apiKey) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet&part=contentDetails`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        return data.items[0];
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error('Error al obtener los datos del video:', error);
      throw error;
    }
  }
  