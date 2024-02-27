# VsCode Sibling Spaces

VsCode Sibling Spaces is a simple yet very effective extension for Visual Studio Code that simplifies the process of switching between related workspace environments. 
This extension is particularly useful for developers who manage multiple, interconnected projects, facilitating a seamless transition across workspaces while maintaining the context of open files and settings.

## Mission
Most projects have 2,3 sometime 10 different related workspaces, these can be the frontend, backend, etc. 
We call these 'Sibling Spaces'. 
By adding a simple 'siblingSpaces' file pointing to your other spaces, you can easily 'jump' from one to the other using the 'Show Filtered Recent Projects' command. 

## Features

- **Workspace Navigation**: Easily navigate between sibling workspaces with a single click, streamlining your development workflow.
- **Context Preservation**: Retain the context of your open files and settings when switching between workspaces, ensuring a consistent and focused development experience.
- **Customizable Sibling Workspaces**: Define sibling workspaces through a simple `.siblingSpaces` configuration file, allowing for tailored workspace relationships.

## Installation

1. Clone the repository or download the VSIX file.
2. Open Visual Studio Code and navigate to the Extensions view.
3. Choose `Install from VSIX...` from the menu and select the downloaded VSIX file.
4. Restart Visual Studio Code to enable the extension.

## Usage

1. Place a `.siblingSpaces` JSON file in the root of your workspace, defining the paths to sibling workspaces.
2. Access the Sibling Spaces feature through the Command Palette or assign a keyboard shortcut for even faster navigation.
3. Select a sibling workspace to switch to, and the extension will update your workspace context accordingly.

## Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
