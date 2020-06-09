import { Component } from "@angular/core"


@Component({
  selector: "app-produto",//O nome da tag que vai ser renderizado
  template: "<html><body>{{ obterNome() }}</body></html>", //estrutura html onde vai renderizar o componente

})
export class ProdutoComponent {

//Nome das classes começando com maiusculas por conta da convenção PascalCase
/*camelCase para variaveis, atributos e nomes das funções*/

  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }
}
