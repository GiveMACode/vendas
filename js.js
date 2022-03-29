 // O JavaScript fica aqui
 //PRIMEIRO BOTÃO

 function mostrar_numeros(){
    let para = document.createElement('p');
    para.textContent = "você clicou no botão";
    document.body.appendChild(para);

// SEGUNDO BOTÃO , mostrar texto e outros botões
    function segundo_botao(){
        let para = document.createElement('p');
        para.textContent = "você clicou no botão";
        document.body.appendChild(para);

//TERCEIRO BOTÃO, Mostrar link sonar
    function criaParagrafo(){
            let para = document.createElement('p');
            para.textContent = "você clicou no botão";
            document.body.appendChild(para);

//QUARTO BOTÃO - Jenkins
    function criaParagrafo(){
                let para = document.createElement('p');
                para.textContent = "você clicou no botão";
                document.body.appendChild(para);

} 

const botoes = document.querySelectorAll('button')
for(var i = 0; i< botoes.length; i++){
    botoes[i].addEventListener('click', criaParagrafo)
}