// Função para exibir os carros na página
function exibirCarros(carrosData) {
    var carrosContainer = document.getElementById('carros-container');
    carrosData.carros.forEach(function (carro) {
        var carroDiv = document.createElement('div');
        carroDiv.classList.add('carro', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md');

        var imagem = document.createElement('img');
        imagem.src = carro.imagem;

        var marcaModelo = document.createElement('p');
        marcaModelo.textContent = carro.marca + ' ' + carro.modelo;
        marcaModelo.classList.add('text-xl', 'font-semibold', 'mb-2');

        var ano = document.createElement('p');
        ano.textContent = 'Ano: ' + carro.ano;
        ano.classList.add('text-gray-600');

        carroDiv.appendChild(imagem);
        carroDiv.appendChild(marcaModelo);
        carroDiv.appendChild(ano);

        carrosContainer.appendChild(carroDiv);
    });
}

// Função para carregar e exibir os carros usando fetch
function carregarEExibirCarros() {
    fetch('../json/carros.json')
        .then(response => response.json())
        .then(data => exibirCarros(data))
        .catch(error => console.error('Erro ao carregar os dados dos carros:', error));
}

// Chamando a função para carregar e exibir os carros ao carregar a página
carregarEExibirCarros();
