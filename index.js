#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.blue.bold('\n🚀 Welcome to Create Template CLI! 🚀\n'));
console.log(chalk.cyan('This tool will help you generate web project templates\n'));

const TEMPLATES = {
  html: 'HTML',
  vue: 'Vue',
  react: 'React',
  angular: 'Angular'
};

async function init() {
  const { template } = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Select a template to generate:',
      choices: Object.values(TEMPLATES),
    }
  ]);

  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      default: template.toLowerCase() + '-project'
    }
  ]);

  const templateKey = Object.keys(TEMPLATES).find(key => TEMPLATES[key] === template);
  const templateDir = path.join(__dirname, 'templates', templateKey);
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `Directory ${projectName} already exists. Overwrite?`,
        default: false
      }
    ]);

    if (!overwrite) {
      console.log(chalk.yellow('⚠️ Operation cancelled'));
      return;
    }
    
    fs.removeSync(targetDir);
  }

  const spinner = ora(`Creating ${template} project in ${projectName}...`).start();

  try {
    fs.copySync(templateDir, targetDir);
    spinner.succeed(`${template} project created successfully!`);
    
    console.log('\n🎉 Done! Get started with your new project:');
    console.log(chalk.cyan(`\ncd ${projectName}`));
    
    // Add specific instructions based on template
    if (template === 'Vue' || template === 'React' || template === 'Angular') {
      console.log(chalk.cyan('npm install'));
      console.log(chalk.cyan('npm run dev'));
    } else if (template === 'HTML') {
      console.log(chalk.cyan('Open index.html in your browser'));
    }
    
    console.log('\nHappy coding! 👨‍💻\n');
  } catch (err) {
    spinner.fail('Failed to create project');
    console.error(chalk.red(`Error: ${err.message}`));
  }
}

init().catch((error) => {
  console.error(chalk.red('Error:'), error);
  process.exit(1);
}); 