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

  procurarConteudo(descricao,elemento){

    let array = [descricao.toUpperCase(), descricao.toLowerCase()];
    let items = [];

    descObj = descricao.split('#');



    if(descObj.length == 1){

      descObjTest = descObj[0]

      descObjTest = [descObjTest.toUpperCase(), descObjTest.toLowerCase(), descObjTest.replace(' ',''), 
      descObjTest.toLowerCase().replace(' ',''), descObjTest.toUpperCase().replace(' ','')];

      items = descObjTest.filter(e => {

        if(conteudo.indexOf(e) != -1){

          return e;

        }

      });

    }
    if(descObj.length == 2){

      descObj1 = descObj[0];
      descObj2 = descObj[1];
      
      if(conteudo.indexOf(descObj1) != -1 && conteudo.indexOf(descObj2) != -1){

        items = [true]

      }

      else if(conteudo.indexOf(descObj1.toUpperCase()) != -1 && conteudo.indexOf(descObj2.toUpperCase()) != -1){

        items = [true]

      }

      else if(conteudo.indexOf(descObj1.toLowerCase()) != -1 && conteudo.indexOf(descObj2.toLowerCase()) != -1){

        items = [true]

      }
      else if(conteudo.indexOf(descObj1.replace(' ','').toLowerCase()) != -1 && conteudo.indexOf(descObj2.replace(' ','').toLowerCase()) != -1){

        items = [true]

      }
      else if(conteudo.indexOf(descObj1.replace(' ','').toUpperCase()) != -1 && conteudo.indexOf(descObj2.replace(' ','').toUpperCase()) != -1){

        items = [true]

      }
      else if(conteudo.indexOf(descObj1.toUpperCase()) != -1 && conteudo.indexOf(descObj2.replace(' ','').toUpperCase()) != -1){

        items = [true]

      }
      else if(conteudo.indexOf(descObj1.replace(' ','').toUpperCase()) != -1 && conteudo.indexOf(descObj2.toUpperCase()) != -1){

        items = [true]

      }
      else if(conteudo.indexOf(descObj1.replace(' ','').toUpperCase()) != -1 && conteudo.indexOf(descObj2.toUpperCase()) != -1){

        items = [true]

      }
      else if(conteudo.indexOf(descObj1.replace(' ','').toLowerCase()) != -1 && conteudo.indexOf(descObj2.toUpperCase()) != -1){

        items = [true]

      }

    }
    if(items.length > 0){

      return true;
    }


  }

  procurar(descricao){

    this.apagarRegistro();
    let items = [];
    let tables = document.querySelectorAll('.table-responsive')[1].querySelectorAll('table');
    let tent = false;

    for (var i = 0; i < tables.length; i++) {


      let textObjeto = tables[i].querySelectorAll('td')[1].innerText;  //Pega todos os td e o indice[1] refere ao nome do produto

      tent = this.procurarConteudo(descricao,textObjeto);

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