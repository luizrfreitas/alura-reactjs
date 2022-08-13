import React, { Component } from "react";
import CardNota from "./CardNota";

// .jsx é a extensão do React
// Isso aqui é um componente de classe do react, aqui eu posso utilizar esse código várias vezes dentro do meu app.

    // Aqui é um método de criar listas por código Array.of()
    // .map faz com que você itere por cada item dessa lista, indicando o item que você quer usar.
    // Dentro do return() só é possível escrever funções, não declarar elementos.

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>

        {Array.of("trabalho", "trabalho", "estudos").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
