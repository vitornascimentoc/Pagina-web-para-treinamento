function meuSite () {
  const formulario = document.querySelector('.forms');
  const resultado = document.querySelector('.comanda');
  const resetar = document.querySelector('.reset');
  
    
  function resetarFormulario(limparForms) {
    limparForms.preventDefault();  
    formulario.reset();
  }

    const forms = [];
    
    function aguardarEvento(evento) {
    evento.preventDefault();
    
    const nome = document.getElementById("nome-usuario");
    const data = document.getElementById("dataNascimento");
    const genero = document.getElementById("genero-usuario");
    const num = document.getElementById("numero-usuario");
    

    forms.push({
      nomeUsuario: nome.value,
      dataNascimento: data.value,    
      generoUsuario: genero.value,
      numero: num.value,
    });
    console.log(forms);

  }
    resultado.addEventListener('click', aguardarEvento);
    resetar.addEventListener('click', resetarFormulario);
    
  }


meuSite();