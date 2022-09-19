const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const URL_ESTADOS = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(data => {
        data.map(cadaResultado => {
            regiao.innerHTML += `<option value="${cadaResultado.id}">${cadaResultado.nome}</option>`;
        });
    });

regiao.addEventListener('change', () => {
    estado.innerHTML = `<option>-- SELECIONE --</option>`; //RESETA OS ESTADOS
    fetch(URL_ESTADOS(regiao.value))
    .then(response => response.json())
    .then(data => {
        data.map(cadaResultado => {
            estado.innerHTML += `<option value="${cadaResultado.id}">${cadaResultado.nome}</option>`;
        });
    });
});