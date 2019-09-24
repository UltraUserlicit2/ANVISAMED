class utils {

  initializeStep3(objeto,marca){

      this.apagarBula();
      this.procurar(objeto);
      this.checarMarca(marca);

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
  validator(descObj1,descObj2,conteudo){

    if(conteudo.indexOf(descObj1) != -1 && conteudo.indexOf(descObj2) != -1){
      
      return true;

    }
    if(conteudo.indexOf(descObj1.replace(' ','')) != -1 && conteudo.indexOf(descObj2) != -1){

      return true;

    }
    if(conteudo.indexOf(descObj1) != -1 && conteudo.indexOf(descObj2.replace(' ','')) != -1){

      return true;

    }
    if(conteudo.indexOf(descObj1.replace(' ','')) != -1 && conteudo.indexOf(descObj2.replace(' ','')) != -1){

      return true;

    }
    else{

      return false;

    }
    

  }

  procurarConteudo(descricao,conteudo){

    let items = [];
    let validator = false;
    let descObj = descricao.split('#');

    descObj = descObj.map(e => {

      return e.toUpperCase();

    });

    if(descObj.length == 1){

      let descObjTest = descObj[0]

      descObjTest = [descObjTest.replace(' ',''), descObjTest];

      items = descObjTest.filter(e => {

        if(conteudo.indexOf(e) != -1){

          return e;

        }

      });

    }
    if(descObj.length == 2){
      
      let descObj1 = descObj[0];
      let descObj2 = descObj[1];

      validator = this.validator(descObj1,descObj2,conteudo);

    }
    
    if(items.length > 0 || validator){

      return true;
    }


  }

  procurar(descricao){
    try{
      this.apagarBula();
    }catch{
      null
    }
    this.apagarRegistro();
    let items = [];
    let tables = document.querySelectorAll('.table-responsive')[1].querySelectorAll('table');
    let tent = false;

    for (var i = 0; i < tables.length; i++) {


      let textObjeto = tables[i].querySelectorAll('td')[1].innerText;  //Pega todos os td e o indice[1] refere ao nome do produto

      tent = this.procurarConteudo(descricao.toUpperCase(),textObjeto.toUpperCase());

      if(tent){

        items = tables[i];
        break;
      }

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

checarMarca(value){

  if(document.body.innerText.indexOf(value) != -1){

    return;

  }else{

    let marcaNotFound = document.createElement('div');

    marcaNotFound.id = "MarcaNotFound";

    document.body.appendChild(marcaNotFound);

    return;

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