import TextArea from "../text-area";
import './form.css'

function Form() {
    
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextArea label="Nome" placeholder="Digite seu nome"></TextArea>
                <TextArea label="Cargo" placeholder="Digite seu cargo"></TextArea>
                <TextArea label="Imagem" placeholder="Informe o endereço da imagem"></TextArea>
                <TextArea label="Time" placeholder="Informe seu time"></TextArea>
            </form>
        </section>
    )
}

export default Form;