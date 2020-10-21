import { exec } from 'child_process'

/**
 * Executes a shell command and return it as a Promise.
 * @param command {string}
 * @return {Promise<string>}
 */
function cmd (command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) console.error(err)
            stdout ? resolve(stdout) : reject(stderr)
        })
    })
}

console.log(await cmd('dockerd'))

// #!/bin/zsh
// dockerd & echo "Starting docker daemon..."

// until docker version > /dev/null 2>&1
// do
//     sleep 1;
//     echo '.';
// done

// echo 'Started docker daemon'
// #service docker start && \\
