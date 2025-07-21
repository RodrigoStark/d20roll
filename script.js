document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do HTML que vamos manipular
    const dice = document.getElementById('dice');
    const diceResult = document.getElementById('dice-result');
    const rollButton = document.getElementById('roll-button');

    // Função que será chamada quando o botão for clicado
    function rollDice() {
        // Desabilita o botão para evitar cliques múltiplos durante a animação
        rollButton.disabled = true;

        // Limpa o resultado anterior e as classes de cores especiais
        diceResult.textContent = '';
        dice.classList.remove('critical-success', 'critical-failure');

        // Adiciona a classe 'rolling' para iniciar a animação CSS
        dice.classList.add('rolling');

        // Usa setTimeout para esperar a animação terminar antes de mostrar o resultado
        setTimeout(() => {
            // Gera um número aleatório inteiro entre 1 e 20
            const result = Math.floor(Math.random() * 20) + 1;

            // Remove a classe de animação para que ela possa ser usada novamente
            dice.classList.remove('rolling');

            // Exibe o número sorteado no dado
            diceResult.textContent = result;

            // Verifica se foi um sucesso ou falha crítica e aplica o estilo
            if (result === 20) {
                dice.classList.add('critical-success');
            } else if (result === 1) {
                dice.classList.add('critical-failure');
            }

            // Habilita o botão novamente
            rollButton.disabled = false;

        }, 800); // 800 milissegundos, a mesma duração da animação no CSS
    }

    // Adiciona o "ouvinte de evento" ao botão. Quando ele for clicado, a função rollDice será executada.
    rollButton.addEventListener('click', rollDice);
});