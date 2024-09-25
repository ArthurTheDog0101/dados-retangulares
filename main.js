const url/="https://servicodados.ibge.gov.br/api/v3/agregados/1286/periodos/1920/variaveis/590?localidades=N3[27,28,29,43,50]"

async function VisualizarDados() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}
VisualizarDados()