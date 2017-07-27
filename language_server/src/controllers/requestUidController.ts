import {CompletionItem, CompletionItemKind} from 'vscode-languageserver';
import {httpRequestFactory} from '../utility/httpRequestFactory';

export class requestUidController {

    static async getCompletionItem(partUid: string) {
        let completionItems: CompletionItem[] = [];
        // var text = document.getText(document.lineAt(position).range);
        // var tx = text.substring(text.lastIndexOf("@")+1);
        // if(tx.length > 1 && tx[0] == ' '){
        //     var completionItems = [];
        // }
        var re = await this.getData('http://restfulapiwebservice0627.azurewebsites.net/uids/extension/', 'cs');
        re.forEach(element => {
            let completionItem: CompletionItem = CompletionItem.create("cs");
            completionItem.kind = CompletionItemKind.Variable;
            //completionItem.commitCharacters = ["c","s"];
            completionItem.detail = "aaa";
            //completionItem.filterText = "bbb";
            //completionItem.insertText = new vscode.SnippetString(element);
            completionItems.push(completionItem);
        });
        return completionItems;
    }

    static async  getData(url:string, uid:string):Promise<string[]> {
        var data = await httpRequestFactory.getUids(url, uid);
        return data;
	}
}