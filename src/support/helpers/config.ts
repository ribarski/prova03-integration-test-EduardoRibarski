import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

// 1. Defina a interface para o seu config.yml
interface Config {
  application: {
    base_url: string;
    automationpractice_QA: string;
    bugereats_QA: string;
    sauceDemo: string;
    farmacia: string;
    empresa: string;
    gremio: string; // Adicione a nova URL aqui
  };
}

// 2. Crie o caminho correto para o arquivo (dentro da pasta fixtures)
const configPath = path.join(__dirname, '..', 'fixtures', 'config.yml');

// 3. Carregue o arquivo
const configData = yaml.load(fs.readFileSync(configPath, 'utf8')) as Config;

// 4. Exporte apenas a seção 'application'
export const config = configData.application;