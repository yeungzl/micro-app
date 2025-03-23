import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import {FILE_NAME} from './appNameMap.js';

// 获取 __dirname 的等效值（ES 模块中没有 __dirname）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取其他参数
const args = process.argv.slice(2);
const [appName = 'test'] = args;
console.log(FILE_NAME, 'FILE_NAME[appName]');
// 定义要运行的目录
const targetDir = path.join(__dirname, '../', 'src', 'app', FILE_NAME[appName]);

// 执行命令
const command = 'npm run dev';

// 创建一个子进程来运行命令
const childProcess = exec(command, { cwd: targetDir });

// 监听子进程的输出
childProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

childProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

childProcess.on('close', (code) => {
  console.log(`子进程退出，退出码: ${code}`);
});