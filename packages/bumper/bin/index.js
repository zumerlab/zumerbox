const { execSync } = require('child_process');
const fs = require('fs');

// Función para ejecutar la versión sugerida
function executeNpmVersion(version) {
  execSync(`npm version ${version}`, (error, stdout, stderr) => {
      if (error) {
          console.error(`Error al ejecutar npm version: ${error.message}`);
          return;
      }
      if (stderr) {
          console.error(`Error al ejecutar npm version: ${stderr}`);
          return;
      }
      console.log(stdout);
  });
}

// Función para verificar si hay tags en git
function hasTags() {
  try {
    const tags = execSync('git tag').toString().split('\n');
    return tags.length > 0 && tags[0] !== '';
  } catch (error) {
    return false;
  }
}

// Verificar si hay tags en el repositorio
if (!hasTags()) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`No hay tags en el repositorio. ¿Desea crear un tag para la versión inicial basada en el valor de 'version' en package.json? (y/n) `, (answer) => {
    if (answer.trim().toLowerCase() === 'y') {
      let initialVersion;
      try {
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
        initialVersion = packageJson.version;
      } catch (err) {
        console.error('No se pudo leer el archivo package.json');
        process.exit(1);
      }
      execSync(`git tag v${initialVersion}`);
      console.log(`Tag v${initialVersion} creado.`);
    } else {
      console.log('No se creará un tag para la versión inicial.');
    }
    readline.close();
  });
} else {
  // Leer la versión actual desde el archivo package.json
  let currentVersion;
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    currentVersion = packageJson.version;
  } catch (err) {
    console.error('No se pudo leer el archivo package.json');
    process.exit(1);
  }

  // Analizar los git commits para sugerir el tipo de versión ideal
  const commitLog = execSync('git log --oneline').toString();
  let suggestedBump = 'patch'; // Por defecto
  if (commitLog.includes('BREAKING CHANGE')) {
    suggestedBump = 'major';
  } else if (commitLog.includes('feat')) {
    suggestedBump = 'minor';
  }

  // Mostrar la versión sugerida
  const currentVersionArray = currentVersion.split('.');
  let suggestedVersion;
  switch (suggestedBump) {
    case 'major':
      suggestedVersion = `${parseInt(currentVersionArray[0]) + 1}.0.0`;
      break;
    case 'minor':
      suggestedVersion = `${currentVersionArray[0]}.${parseInt(currentVersionArray[1]) + 1}.0`;
      break;
    case 'patch':
    default:
      suggestedVersion = `${currentVersionArray[0]}.${currentVersionArray[1]}.${parseInt(currentVersionArray[2]) + 1}`;
      break;
  }

  console.log(`Sugerencia de versión: ${currentVersion} -> ${suggestedVersion}`);

  // Preguntar al usuario si quiere utilizar la versión sugerida o especificar una opción
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`¿Desea utilizar la versión sugerida (${suggestedVersion}) o especificar una opción (major, minor, patch)? `, (answer) => {
    const option = answer.trim().toLowerCase();
    const validOptions = ['major', 'minor', 'patch'];
    if (validOptions.includes(option)) {
      suggestedBump = option;
      switch (suggestedBump) {
        case 'major':
          suggestedVersion = `${parseInt(currentVersionArray[0]) + 1}.0.0`;
          break;
        case 'minor':
          suggestedVersion = `${currentVersionArray[0]}.${parseInt(currentVersionArray[1]) + 1}.0`;
          break;
        case 'patch':
        default:
          suggestedVersion = `${currentVersionArray[0]}.${currentVersionArray[1]}.${parseInt(currentVersionArray[2]) + 1}`;
          break;
      }
    }

    // Preguntar si esta versión será release o prerelease
    readline.question(`¿Esta versión será release o prerelease? (r/p) `, (releaseType) => {
      const finalVersion = releaseType.trim().toLowerCase() === 'r' ? suggestedVersion : `${suggestedVersion}-pre.${Date.now()}`;
      console.log(`La versión final es: ${finalVersion}`);
      executeNpmVersion(finalVersion)
      readline.close();
    });
  });
}
