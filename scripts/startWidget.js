const { exec } = require('child_process');
const widgetName = process.argv[2];

if (!widgetName) {
  console.error('请提供组件名称，例如：npm run start projectA');
  process.exit(1);
}

const command = `npm run dev http://localhost:3000/${widgetName}`;
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});