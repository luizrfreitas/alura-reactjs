import React,{ Component } from "react";
import { FormularioCadastro } from "./components/FormularioCadastro.jsx";
import { ListaDeNotas } from "./components/ListaDeNotas.jsx";

// Isso é um componente.
class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;

// Para inciar um app é precisa chamar no terminal por:
// npm start
//jsx ->
//acent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
// Isso significa que não pode ter dois elementos irmãos
