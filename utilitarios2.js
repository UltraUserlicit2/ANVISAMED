class utils {

  initializeStep3(objeto){

      this.apagarBula();
      this.procurar(objeto);

  }

  apagarRegistro(){

    let inativo = document.querySelectorAll('[ng-if="apresentacao.inativa"]');
    if (inativo) {

    inativo.forEach(e =>{ //Pega todos os inativos

      let parent = e.parentElement.parentElement.parentElement.parentElement; // navega entra os parentes para pegar a tabela

      parent.remove(); //Remove a tabela

    });
  }
}

  procurarConteudo(descricao,elemento){

    let array = [descricao, descricao.replace(' ',''), descricao.replace(' ','').toLowerCase(), descricao.toLowerCase()];
    let items = [];

    for (let i = 0; i < array.length; i++) {

      if(elemento.indexOf(descricao) != -1){ //Se o nome existir ele adiciona ao array

        let verifica = descricao.slice(descricao.indexOf(descricao)-1,descricao.indexOf(descricao));

        if(!isNaN(parseInt(verifica))){

          null;

        }else{


          items.push(array[i]); //push
          return true;

        }
      }
    }


  }

  procurar(descricao){

    this.apagarRegistro();
    let items = [];
    let tables = document.querySelectorAll('.table-responsive')[1].querySelectorAll('table');
    let cont = 0;
    let tent = false;

    for (var i = 0; i < tables.length; i++) {


      let textObjeto = tables[i].querySelectorAll('td')[1].innerText;  //Pega todos os td e o indice[1] refere ao nome do produto

      tent = this.procurarConteudo(descricao,textObjeto);

      if(tent){

        items = tables[i];
        break;
      }

      cont++;

    }



  if (items.length < 1){ //se o produto nao for encontrado ele cria uma div vazia com id 'naoEncontrado, para referencia'

  let divError = document.createElement('div');
  divError.id = 'naoEncontrado';
  document.head.append(divError);


}else{ //se o elemento estiver lá, dê um click nele e expanda para ser salvo


  tables.forEach((e,index)=>{

    if (e == items) {

      null;

    }else{

    e.remove();

    }

  });

  items.querySelector('[ng-click="expandirDetalhe(apresentacao)"]').click();

  }


}

apagarBula(){

  document.querySelector('tbody').querySelectorAll('tr')[5].remove();

}

}

removeStep3(){

    if (document.getElementById('naoEncontrado')) {

      document.getElementById('naoEncontrado').remove()

    }else {
      null;
    }
    if (document.getElementById('MarcaNotFound')) {

      document.getElementById('MarcaNotFound').remove()

    }else {
      null;
    }

  }

}//Fecha classe
var utilitarios = new utils();