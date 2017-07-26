'use strict';

var vscode = require('vscode');
var json = require('jsonc-parser');
var path = require('path');

class JsonOutlineProvider {

	constructor() {
		vscode.workspace.onDidChangeTextDocument(e => {})
		this.parseTree();
		vscode.regis
	}


	getChildren() {

	}

	getTreeItem() {

	}


	parseTree() {
		this.tree = null;
		this.editor = vscode.window.activeTextEditor;
		if (this.editor && this.editor.document && this.editor.document.languageId === 'json') {
			this.tree = json.parseTree(this.editor.document.getText());
		}
		console.log(this.tree);
	}

}

module.exports = JsonOutlineProvider;