import * as fs from 'fs/promises'; // Usando a versão baseada em Promises do 'fs'
import { parse } from 'csv-parse/sync'; // Usando a versão síncrona para simplicidade

// Lista de preposições a serem mantidas em minúsculas.
const PREPOSICOES = new Set(["de", "da", "das", "do", "dos", "e"]);

/**
 * Capitaliza um nome completo, mantendo preposições em minúsculas.
 * @param nomeCompleto O nome a ser processado.
 * @returns O nome formatado.
 */
function capitalizarNome(nomeCompleto: string): string {
    // 1. Converte todo o nome para minúsculas.
    const nomeEmMinusculas = nomeCompleto.toLowerCase();
    
    // 2. Divide o nome em palavras.
    const palavras = nomeEmMinusculas.split(' ');

    // 3. Usa 'map' para transformar cada palavra.
    const palavrasCapitalizadas = palavras.map(palavra => {
        // Se a palavra NÃO for uma preposição, capitaliza a primeira letra.
        if (!PREPOSICOES.has(palavra)) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        }
        // Se for uma preposição, retorna como está (em minúsculas).
        return palavra;
    });

    // 4. Junta as palavras novamente em uma única string.
    return palavrasCapitalizadas.join(' ');
}

/**
 * Função principal que orquestra a leitura, processamento e gravação dos arquivos.
 */
async function processarArquivo() {
    const arquivoEntrada = 'nomes.csv';
    const arquivoSaida = 'nomes_corrigidos.csv';

    try {
        console.log(`Lendo o arquivo: ${arquivoEntrada}...`);
        
        // Lê o conteúdo do arquivo de entrada de forma assíncrona.
        const conteudoCsv = await fs.readFile(arquivoEntrada, 'utf-8');

        // Faz o parse do CSV. O 'parse' retorna um array de arrays. Ex: [['NOME1'], ['NOME2']]
        const registros: string[][] = parse(conteudoCsv, {
            skip_empty_lines: true,
        });

        console.log(`Total de ${registros.length} nomes encontrados. Processando...`);

        // Processa cada linha (que contém um nome)
        const nomesProcessados = registros.map(registro => {
            const nomeOriginal = registro[0]; // Pega o primeiro elemento do array da linha
            if (nomeOriginal) {
                return capitalizarNome(nomeOriginal);
            }
            return ''; // Retorna string vazia se a linha for malformada
        });

        // Adiciona um cabeçalho e junta os nomes processados com quebra de linha.
        const conteudoSaida = "NomeCorrigido\n" + nomesProcessados.join('\n');

        // Grava o resultado no arquivo de saída.
        await fs.writeFile(arquivoSaida, conteudoSaida, 'utf-8');

        console.log(`Arquivo '${arquivoSaida}' gravado com sucesso!`);

    } catch (erro) {
        console.error("Ocorreu um erro durante o processamento:", erro);
    }
}

// Executa a função principal.
processarArquivo();