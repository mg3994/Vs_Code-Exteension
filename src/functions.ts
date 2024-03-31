// import * as vscode from 'vscode';

// export async function generateCode(){
// // Text selection
// const editor = vscode.window.activeTextEditor;
// if (!editor) {
//     console.debug('Abandon: no open text editor.');
//     return;
// }
// const selection = editor.selection;
// const selectedPrompt = editor.document.getText(selection); //selectedCode 
// const selectedCode = selectedPrompt ;

// // Insert before selection.
// editor.edit((editBuilder) => {

//     // Copy the indent from the first line of the selection.
//     const trimmed = selectedPrompt.trimStart();
//     const padding = selectedPrompt.substring(0, selectedPrompt.length - trimmed.length);

//     let pyComment = comment.split('\n').map((l: string) => `${padding}${l}`).join('\n'); //comment is response =>   const comment = response.text();
//     if (pyComment.search(/\n$/) === -1) {
//         // Add a final newline if necessary.
//         pyComment += "\n";
//     }
    
//     editBuilder.insert(selection.start, pyComment);
// });



// // Insert before selection.
// editor.edit((editBuilder) => {
//     // TODO(you!): Support other comment styles.
//     const commentPrefix = '# ';

//     // Copy the indent from the first line of the selection.
//     const trimmed = selectedCode.trimStart();
//     const padding = selectedCode.substring(0, selectedCode.length - trimmed.length);

//     let pyComment = comment.split('\n').map((l: string) => `${padding}${commentPrefix}${l}`).join('\n');
//     if (pyComment.search(/\n$/) === -1) {
//         // Add a final newline if necessary.
//         pyComment += "\n";
//     }
//     let commentIntro = padding + commentPrefix + "Code comment: (generated)\n";
//     editBuilder.insert(selection.start, commentIntro);
//     editBuilder.insert(selection.start, pyComment);
// });
// }