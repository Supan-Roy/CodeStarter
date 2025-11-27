const vscode = require("vscode");

function insertCppTemplate(editor, doc) {
	if (doc.languageId !== "cpp") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(
		new vscode.SnippetString(
			`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    $1
    return 0;
}`
		)
	);

}

function insertPythonTemplate(editor, doc) {
	if (doc.languageId !== "python") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(
		new vscode.SnippetString(
			`def main():
    $1

if __name__ == "__main__":
    main()`
		)
	);
}

function insertJavaTemplate(editor, doc) {
	if (doc.languageId !== "java") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(
		new vscode.SnippetString(
			`public class Main {
    public static void main(String[] args) {
        $1
    }
}`
		)
	);
}

function insertJsTemplate(editor, doc) {
	if (doc.languageId !== "javascript") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(
		new vscode.SnippetString(
			`function main() {
    $1
}

main();`
		)
	);
}

function insertHtmlTemplate(editor, doc) {
	if (doc.languageId !== "html") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(
		new vscode.SnippetString(
			`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    $1
</body>
</html>`
		)
	);
}

function insertCTemplate(editor, doc) {
	if (doc.languageId !== "c") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`#include <stdio.h>

int main() {
    $1
    return 0;
}`
	));
}

function insertTsTemplate(editor, doc) {
	if (doc.languageId !== "typescript") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`function main(): void {
    $1
}

main();`
	));
}

function insertCssTemplate(editor, doc) {
	if (doc.languageId !== "css") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`body {
    $1
}`
	));
}

function insertBashTemplate(editor, doc) {
	if (doc.languageId !== "shellscript") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`#!/bin/bash

$1`
	));
}

function insertCsharpTemplate(editor, doc) {
	if (doc.languageId !== "csharp") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`using System;

class Program {
    static void Main(string[] args) {
        $1
    }
}`
	));
}

function insertGoTemplate(editor, doc) {
	if (doc.languageId !== "go") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`package main

import "fmt"

func main() {
    $1
}`
	));
}

function insertRustTemplate(editor, doc) {
	if (doc.languageId !== "rust") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`fn main() {
    $1
}`
	));
}

function insertPhpTemplate(editor, doc) {
	if (doc.languageId !== "php") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`<?php

function main() {
    $1
}

main();`
	));
}

function insertSqlTemplate(editor, doc) {
	if (doc.languageId !== "sql") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`-- Write your SQL query here
$1`
	));
}

function insertJsonTemplate(editor, doc) {
	if (doc.languageId !== "json") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`{
    "$1": ""
}`
	));
}

function insertReactJsxTemplate(editor, doc) {
    if (doc.languageId !== "javascriptreact" && doc.languageId !== "typescriptreact") return;
    if (doc.getText().trim() !== "") return;

    const fileName = doc.fileName.split("\\").pop().split("/").pop(); 
    const baseName = fileName.replace(/\.[^/.]+$/, ""); 

    const componentName = baseName
        .replace(/[-_ ]+/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

    editor.insertSnippet(
        new vscode.SnippetString(
`export default function ${componentName}() {
    return (
        <div>
            $1
        </div>
    );
}`
        )
    );
}


function insertTsxTemplate(editor, doc) {
	if (doc.languageId !== "typescriptreact") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`export default function App(): JSX.Element {
    return (
        <div>
            $1
        </div>
    );
}`
	));
}

function insertDartTemplate(editor, doc) {
	if (doc.languageId !== "dart") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`void main() {
    $1
}`
	));
}

function insertKotlinTemplate(editor, doc) {
	if (doc.languageId !== "kotlin") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`fun main() {
    $1
}`
	));
}

function insertSwiftTemplate(editor, doc) {
	if (doc.languageId !== "swift") return;
	if (doc.getText().trim() !== "") return;

	editor.insertSnippet(new vscode.SnippetString(
		`import Foundation

func main() {
    $1
}

main()`
	));
}


function activate(context) {
    console.log("CodeStarter is active!");

    const openListener = vscode.workspace.onDidOpenTextDocument((doc) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;
        if (editor.document !== doc) return;

        insertCppTemplate(editor, doc);
        insertPythonTemplate(editor, doc);
        insertJavaTemplate(editor, doc);
        insertJsTemplate(editor, doc);
        insertHtmlTemplate(editor, doc);
        insertCTemplate(editor, doc);
        insertTsTemplate(editor, doc);
        insertCssTemplate(editor, doc);
        insertBashTemplate(editor, doc);
        insertCsharpTemplate(editor, doc);
        insertGoTemplate(editor, doc);
        insertRustTemplate(editor, doc);
        insertPhpTemplate(editor, doc);
        insertSqlTemplate(editor, doc);
        insertJsonTemplate(editor, doc);
        insertReactJsxTemplate(editor, doc);
        insertTsxTemplate(editor, doc);
        insertDartTemplate(editor, doc);
        insertKotlinTemplate(editor, doc);
        insertSwiftTemplate(editor, doc);
    });

    context.subscriptions.push(openListener);

	// Trigger when the user switches editors (more reliable)
	vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (!editor) return;

		const doc = editor.document;
		insertCppTemplate(editor, doc);
		insertPythonTemplate(editor, doc);
		insertJavaTemplate(editor, doc);
		insertJsTemplate(editor, doc);
		insertHtmlTemplate(editor, doc);
		insertCTemplate(editor, doc);
		insertTsTemplate(editor, doc);
		insertCssTemplate(editor, doc);
		insertBashTemplate(editor, doc);
		insertCsharpTemplate(editor, doc);
		insertGoTemplate(editor, doc);
		insertRustTemplate(editor, doc);
		insertPhpTemplate(editor, doc);
		insertSqlTemplate(editor, doc);
		insertJsonTemplate(editor, doc);
		insertReactJsxTemplate(editor, doc);
		insertTsxTemplate(editor, doc);
		insertDartTemplate(editor, doc);
		insertKotlinTemplate(editor, doc);
		insertSwiftTemplate(editor, doc);

	});
}

function deactivate() { }

module.exports = { activate, deactivate };
