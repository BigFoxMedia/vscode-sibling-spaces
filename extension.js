const vscode = require('vscode');
const fs = require('fs');
const path = require('path'); // Ensure this line is included

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('filteredRecentProjects.showFilteredProjects', function () {
		const currentWorkspacePath = vscode.workspace.rootPath; // Note: rootPath is deprecated, consider using workspaceFolders
		if (!currentWorkspacePath) {
				vscode.window.showInformationMessage('No active workspace detected.');
				return;
		}

		const siblings = getSiblings(currentWorkspacePath);
		if (siblings.length === 0) {
				vscode.window.showInformationMessage('No sibling workspaces found.');
				return;
		}

		vscode.window.showQuickPick(siblings, {
				placeHolder: 'Select a workspace to open',
		}).then(selection => {
				if (!selection) {
						return;
				}
				vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(selection), false);
		});
});

context.subscriptions.push(disposable);
}

function getSiblings(workspacePath) {
	const siblingFilePath = path.join(workspacePath, '.siblingSpaces');
	try {
			const data = fs.readFileSync(siblingFilePath, 'utf8');
			const siblings = JSON.parse(data);
			if (Array.isArray(siblings)) {
					return siblings;
			}
			console.error('.siblingSpaces does not contain an array');
	} catch (error) {
			console.error('Error reading sibling workspaces:', error);
	}
	return [];
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
