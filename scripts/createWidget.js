const fs = require("fs");
const path = require("path");

const { exec } = require("child_process");

// Step 1: get widget name
const widgetName = process.argv[2];

if (!widgetName) {
  console.error("请提供 widget 的名称，例如：npm run create widget_A");
  process.exit(1);
}

// Step 2: generate widget folder
const widgetPath = path.join(__dirname, "../src", widgetName);

if (fs.existsSync(widgetPath)) {
  console.error(`文件夹 ${widgetName} 已存在，请重新为插件取一个名字`);
  process.exit(1);
}

fs.mkdirSync(widgetPath);

// Step 3: generate template files for widget
const ComponentTemplate = `import "./Component.css"

const Component = () => {
  return <div>A widget</div>  
}

export default Component`;

const CSSTemplate = `/* CSS for ${widgetName} */`;

const IndexTemplate = `import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./Component";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
}`;

const files = {
  "Component.tsx": ComponentTemplate,
  "index.tsx": IndexTemplate,
  "Component.css": CSSTemplate,
};

for (const [fileName, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(widgetPath, fileName), content);
}

// Step 4: add entry for new widget
const configPath = path.join(__dirname, "../rsbuild.config.ts");
const configContent = fs.readFileSync(configPath, "utf8");
const updatedConfig = configContent.replace(
  /entry: {([^}]*)}/,
  (match, entries) => {
    const objectIndent = " ".repeat(4);
    const keyIndent = " ".repeat(6);
    return `entry: {\n${keyIndent}${entries.trim()}\n${keyIndent}${widgetName}: "./src/${widgetName}/index.tsx",\n${objectIndent}}`;
  }
);

fs.writeFileSync(configPath, updatedConfig, "utf8");
console.log(`成功创建 ${widgetName} 文件夹，并更新配置文件。`);

// Step 5: run dev server for new widget
exec(`npm run dev http://localhost:3000/${widgetName}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`启动开发服务器时出错: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});