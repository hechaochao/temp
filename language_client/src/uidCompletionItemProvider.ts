// import * as vscode from 'vscode';
// import axios from 'axios';
// import {httpRequestFactory} from './utility/httpRequestFactory';

// export class uidCompletionItemProvider{
//         public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]>{

//             var completionItems = [];
//             var text = document.getText(document.lineAt(position).range);
//             var tx = text.substring(text.lastIndexOf("@")+1);
//             // if(tx.length > 1 && tx[0] == ' '){
//             //     var completionItems = [];
//             // }
//             var re = await this.getData('http://restfulapiwebservice0627.azurewebsites.net/uids/extension/', tx);
//             re.forEach(element => {
//                 var completionItem = new vscode.CompletionItem(element);
//                 completionItem.kind = vscode.CompletionItemKind.Variable;
//                 //completionItem.commitCharacters = ["c","s"];
//                 completionItem.detail = "aaa";
//                 //completionItem.filterText = "bbb";
//                 completionItem.insertText = new vscode.SnippetString(element);
//                 completionItems.push(completionItem);
//             });
//             return completionItems;
//         }
        
//         public async getData(url:string, uid:string):Promise<string[]>{
//             var data = await httpRequestFactory.getUids(url, uid);
//             return data;
//         }

//         public resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): any{
//             return item;
//         }
//     }