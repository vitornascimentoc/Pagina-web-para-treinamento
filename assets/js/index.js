function myPage () {
  const result = document.querySelector('.comand'); //Botão de Criar tarefa
  const taskUserPen = document.querySelector('.taskPen'); //Primeira etapa da tarefa: 'Pendente'
  const exeTask = document.querySelector('.taskExe'); // Segunda etapa da tarefa: 'Executando/Em andamento'
  const taskComplet = document.querySelector('.concTask'); // Última etapa da tarefa: 'Concluída'
  
  
  //Função para mover as tarefas entre 'Em andamento' e  'concluídas'
  function moveTask(div, btn) {
    exeTask.appendChild(div);
    btn.setAttribute('title', 'Concluir Tarefa');

    btn.textContent = 'Concluir';

    // Click para 'Tarefas Concluídas' e exclusão de botão de avançar
    btn.addEventListener('click', () => {
      taskComplet.appendChild(div);

      btn.parentNode.removeChild(btn); //Remove o botão após a tarefa ser concluída.
      saveTaskLocalStorage();
    })
  }
  
  function createTask(task) {
    // Função para não permiti input vazio ser enviado
    if(!task) return;

    const div = document.createElement('div'); // Criação de uma Div para receber a tarefa em 'Pendentes'.
    const p = document.createElement('p'); // Criação de um paragrafo para receber a tarefa.
    
    div.classList.add('taskAddUser'); // Adicionando classe à div
    p.classList.add('textTask'); // Adicionando classe ao paragráfo
    
    
    taskUserPen.appendChild(div); // Unindo div da tarefa à div de pendentes. 
    div.appendChild(p); // Unindo o paragráfo à div de tarefa.
    createBtns(div); // Executando a função de criar botões na tarefa
    clearTask(div); // criando botão de apagar
    
    // console.log(userTaskList); //Exibi o array 
    p.textContent += task; // Mostra na página as tarefas criadas

    saveTaskLocalStorage(); 
  }
  
  function waitEvent(event) {
    event.preventDefault();
    const task = document.getElementById("tarefas-usuario").value.trim(); //Pega a tarefa do usuário informada no input
    
    createTask(task);
      
    document.getElementById("tarefas-usuario").value = '';
    document.getElementById("tarefas-usuario").focus();
  }
  
  result.addEventListener('click', waitEvent); //Executa a função principal

    // Função que cria botões para manipular a tarefa dentro da página
  function createBtns(div){
    const btnSetTask = document.createElement('button'); //Cria botão de avançar a tarefa
    
    // Adicionando classe aos botões
    btnSetTask.classList.add('btnSetTask'); 
    
    // Adicionando titulos aos botões
    btnSetTask.setAttribute('title', 'Iniciar Tarefa');

    // Mensagem nos botões
    btnSetTask.textContent = 'iniciar'

    // Utilizando parâmetro para alocar os botões à div da tarefa
    div.appendChild(btnSetTask);

    
    // Click de movimentação da tarefa para outras etapas
    btnSetTask.addEventListener('click', () => {
      moveTask(div, btnSetTask);
    });
  }

  function clearTask(div) {
    const btnDel = document.createElement('button'); // Cria botão de excluir a tarefa

    // Adicionando classe aos botões
    btnDel.classList.add('DelTask');

    // Adicionando titulos aos botões
    btnDel.title = 'Deletar Tarefa';

    // Mensagem nos botões
    btnDel.textContent = 'X'

    div.appendChild(btnDel);

    // Click de Exclusão da tarefa
    btnDel.addEventListener('click', (e) => {
      const el = e.target;

      if(el.classList.contains('DelTask')) {
        el.parentElement.remove();
        saveTaskLocalStorage();
      }

    });
  }

  function saveTaskLocalStorage() {
    const userTaskList = []; //Array para salvar as tarefas

    const pTasks = document.querySelectorAll('.textTask');

    for(let tasks of pTasks) {
      userTaskList.push(tasks.innerText);
    }

    const taskSavedJson = JSON.stringify(userTaskList);
    localStorage.setItem('tarefas', taskSavedJson); //Entre parentêses é o valor para recuperar os dados no localStorage
  }

  function getTasksSaveds() {
    const tasks = localStorage.getItem('tarefas');

    if(!tasks) return;
    
    const taskList = JSON.parse(tasks);
    for(let task of taskList) {
      createTask(task);
    }
  }
  getTasksSaveds();
}

myPage();