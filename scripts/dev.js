import inquirer from "inquirer";
import pkg from "shelljs";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

import {APP_MAP} from './appNameMap.js';

// 获取 __dirname 的等效值（ES 模块中没有 __dirname）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

inquirer
  .prompt([
    {
      // type: 'checkbox',
      type: "select",
      name: "app",
      message: "Please select apps to run",
      choices: Object.keys(APP_MAP),
    },
  ])
  .then(({ app }) => {
    const { port } = APP_MAP[app];
    const command = `vite --port ${port}`;
    let targetDir = "";
    console.log(__dirname);
    if (app === "main") {
      targetDir = path.join(__dirname, '../');
    } else {
      targetDir = path.join(__dirname, '../', "src", "app", app);
    }
    const childProcess = exec(command, { cwd: targetDir });
    childProcess.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    childProcess.on("close", (code) => {
      console.log(`子进程退出，退出码: ${code}`);
    });
    // exec(command, execs.join('&&'));
    // exec(command,  { cwd: execs.join('&&') });
  })
  .catch((error) => {
    console.error(error);
  });
