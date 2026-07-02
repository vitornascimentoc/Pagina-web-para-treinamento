function myPage () {
  const form = document.querySelector('.forms');
  const result = document.querySelector('.comand');
  const taskUser = document.querySelector('.taskPen');
  const exeTask = document.querySelector('.taskExe');
  
  const tasksPen = [];
  const tasksExe = [];
  const tasksConc = [];
  const tasksInc = [];
  
  
  function moveTask(div) {
    exeTask.appendChild(div);
  }
  
  
  function waitEvent(event) {
    event.preventDefault();
    const tarefa = document.getElementById("tarefas-usuario").value;    
    
    function pushTaskExe() {
      tasksExe.push({
        tarefaUsuario: tarefa,
      })
  }

    if(tarefa === ''){
      alert("Você não adicionou nenhuma tarefa.");
      return;
    }
    
    tasksPen.push({
      tarefaUsuario: tarefa,
    });


    const divTasks = document.createElement('div');
    const p = document.createElement('p');
    
    divTasks.classList.add('taskAddUser');
    p.classList.add('textTask');
    
    
    divTasks.appendChild(p);
    createBtns(divTasks);
    pushTaskExe;
    
    taskUser.appendChild(divTasks);
    
    console.log(tasksPen);
    console.log(tasksExe);
    p.textContent += tarefa;
    
  }
  
  result.addEventListener('click', waitEvent);

    function createBtns(div){
      const btnSetTask = document.createElement('button');
    const btnDel = document.createElement('button');
    
    btnSetTask.classList.add('btnSetTask');
    btnDel.classList.add('DelTask');

    btnSetTask.textContent = 'iniciar'
    btnDel.textContent = 'X'
    btnDel.title = 'Deletar Tarefa'

    div.appendChild(btnSetTask);
    div.appendChild(btnDel);
    
    btnSetTask.addEventListener('click', () => {
      moveTask(div);
    });
    
  }


}

myPage();
