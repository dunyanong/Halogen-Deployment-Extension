import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "halogen-deployment" is now active!');

	let disposable = vscode.commands.registerCommand('halogen-deployment.deployToStorage', () => {
		// runs after the command is pressed
		vscode.window.showInformationMessage('Hello World from Halogen Deployment!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
