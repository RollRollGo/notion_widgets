# RollRollGo's Notion Widgets 
RollRollGo's Notion Widgets Project is a dynamic collection of Notion widgets crafted by two female programmers dedicated to enhancing efficiency in the digital workspace. As a brand, RollRollGo aims to make a significant impact in the realm of productivity tools, and this project is our commitment to that vision. Our widgets are designed to be modular and customizable, allowing users to tailor their Notion experience to fit their specific workflow needs.

---
## Install Dependencies
To get started, first install the required dependencies:
```bash
npm install
```

## Project Structure
1. Each widget is stored in a separate folder under the `src/` directory.
2. Each widget folder must contain an entry file `index.tsx`. You can refer to the `quote_machine_of_Chibi_Maruko_chan` widget as an example.
3. The entry point of each widget needs to be configured in the `rsbuild.config.
ts` file under `source.entry` as key-value pairs. The key is the folder name, which will also be part of the URL path when the widget is deployed, and the value is the path to the entry file.
```javascript
source: {
  entry: {
    example_widget_A: "./src/example_widget_A/index.tsx",
    example_widget_B: "./src/example_widget_B/index.tsx",
  },
},
```
4. Shared utility functions should be placed in the `utils/` directory.

## Development
### Create a New Widget
To create a new widget, run the following command:
```bash
npm run create <widget_name>
```
This command will 
1. create a folder named <widget_name> inside the `src/` directory
2. create three template files: `index.tsx`, `Component.tsx`, and `Component.css`. 
3. start the development server and open the new widget’s page in your browser.

### Start the Development Server
To start the server and view an existing widget, run:
```bash
npm run start <widget_name>
```
This will open the widget in the browser at the corresponding link.

## Deployment
Once a widget is merged into the main branch of the repository, it will automatically be deployed to GitHub Pages.