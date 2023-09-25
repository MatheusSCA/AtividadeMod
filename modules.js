export function soma(a, b) {
    return a + b
  }

export function media(notas) {
    let media = 0

    notas.forEach(nota => {
      media+=nota
    });
  
    media /= notas.length
  
    if(media >= 7){ 
    return "Aprovado"
    }
    else {
    return "Reprovado"
    }
  }