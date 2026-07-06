function myPage () {
  const form = document.querySelector('.forms'); // ainda sem função
  const result = document.querySelector('.comand'); //Botão de Criar tarefa
  const taskUserPen = document.querySelector('.taskPen'); //Primeira etapa da tarefa: 'Pendente'
  const exeTask = document.querySelector('.taskExe'); // Segunda etapa da tarefa: 'Executando/Em andamento'
  const taskComplet = document.querySelector('.concTask'); // Última etapa da tarefa: 'Concluída'
  
  const userTaskList = []; //Array para salvar as tarefas
  
  //Função para mover as tarefas entre 'Em andamento' e  'concluídas'
  function moveTask(div, btn) {
    exeTask.appendChild(div);
    btn.setAttribute('title', 'Concluir Tarefa');

    btn.textContent = 'Concluir';

    // Click para 'Tarefas Concluídas' e exclusão de botão de avançar
    btn.addEventListener('click', () => {
      taskComplet.appendChild(div);

      btn.parentNode.removeChild(btn); //Remove o botão após a tarefa ser concluída.
    })
  }
  
  //
  function waitEvent(event) {
    event.preventDefault();
    const task = document.getElementById("tarefas-usuario").value; //Pega a tarefa do usuário informada no input
    
    // MELHORAR ESSE TRECHO
    // Função para não permiti input vazio ser enviado
    if(task === ''){
      alert("Você não adicionou nenhuma tarefa.");
      return;
    }
    
    // Tarefas adicionadas ao Array
    userTaskList.push({
      tarefaUsuario: task,
    });


    const divTasks = document.createElement('div'); // Criação de uma Div para receber a tarefa em 'Pendentes'.
    const p = document.createElement('p'); // Criação de um paragrafo para receber a tarefa.
    
    divTasks.classList.add('taskAddUser'); // Adicionando classe à div
    p.classList.add('textTask'); // Adicionando classe ao paragráfo
    
    
    taskUserPen.appendChild(divTasks); // Unindo div da tarefa à div de pendentes. 
    divTasks.appendChild(p); // Unindo o paragráfo à div de tarefa.
    createBtns(divTasks); // Executando a função de criar botões na tarefa
    
    
    console.log(userTaskList); //Exibi o array 
    p.textContent += task; // Mostra na página as tarefas criadas
    
  }
  
  result.addEventListener('click', waitEvent); //Executa a função principal

    // Função que cria botões para manipular a tarefa dentro da página
    function createBtns(div){
    const btnSetTask = document.createElement('button'); //Cria botão de avançar a tarefa
    const btnDel = document.createElement('button'); // Cria botão de excluir a tarefa
    
    // Adicionando classe aos botões
    btnSetTask.classList.add('btnSetTask'); 
    btnDel.classList.add('DelTask');
    
    // Adicionando titulos aos botões
    btnSetTask.setAttribute('title', 'Iniciar Tarefa');
    btnDel.title = 'Deletar Tarefa';

    // Mensagem nos botões
    btnSetTask.textContent = 'iniciar'
    btnDel.textContent = 'X'

    // Utilizando parâmetro para alocar os botões à div da tarefa
    div.appendChild(btnSetTask);
    div.appendChild(btnDel);

    // Click de Exclusão da tarefa
    btnDel.addEventListener('click', (e) => {
      const el = e.target;

      if(el.classList.contains('DelTask')) {
        el.parentElement.remove();
      }
    });
    
    // Click de movimentação da tarefa para outras etapas
    btnSetTask.addEventListener('click', () => {
      moveTask(div, btnSetTask);
    });
  }
}

myPage();