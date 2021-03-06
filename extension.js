'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var JsonOutlineProvider = require('./src/jsonOutline');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "file-structure" is now active!');
    let jsonOutlineProvider = new JsonOutlineProvider(context);
    vscode.window.registerTreeDataProvider('fileStructure', jsonOutlineProvider);
    jsonOutlineProvider.onDidChangeTreeData(function (e) {
        console.log('onDidChangeTreeData');
    });
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    vscode.commands.registerCommand('fileStructure.refreshEntry', range => {
        console.log('fileStructure.refreshEntry');
    });
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;