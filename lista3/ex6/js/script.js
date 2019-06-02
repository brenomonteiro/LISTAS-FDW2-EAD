function validacao(){
			if(document.getElementById('txtValor1').value =='')
				alert('Preencha o campo login corretamente');
			else{

				if ((document.getElementById('txtValor2').value==document.getElementById('txtValor3').value)&&(document.getElementById('txtValor2').value!=''&& document.getElementById('txtValor3').value!=''))
					alert('Dados digitados corretamente');
				else{
						alert('As informações do campo senha e confirmar senha não são iguais');
						document.getElementById('txtValor2').value = '';
						document.getElementById('txtValor3').value = '';

				}
					
				}

			}

function limparCampos(){

			document.getElementById('txtValor1').value = '';
			document.getElementById('txtValor2').value = '';
			document.getElementById('txtValor3').value = '';

		}