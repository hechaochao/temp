"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const httpRequestFactory_1 = require("./utility/httpRequestFactory");
class uidCompletionItemProvider {
    provideCompletionItems(document, position, token) {
        return __awaiter(this, void 0, void 0, function* () {
            var completionItems = [];
            var text = document.getText(document.lineAt(position).range);
            var tx = text.substring(text.lastIndexOf("@") + 1);
            // if(tx.length > 1 && tx[0] == ' '){
            //     var completionItems = [];
            // }
            var re = yield this.getData('http://restfulapiwebservice0627.azurewebsites.net/uids/extension/', tx);
            re.forEach(element => {
                var completionItem = new vscode.CompletionItem(element);
                completionItem.kind = vscode.CompletionItemKind.Variable;
                //completionItem.commitCharacters = ["c","s"];
                completionItem.detail = "aaa";
                //completionItem.filterText = "bbb";
                completionItem.insertText = new vscode.SnippetString(element);
                completionItems.push(completionItem);
            });
            return completionItems;
        });
    }
    getData(url, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield httpRequestFactory_1.httpRequestFactory.getUids(url, uid);
            return data;
        });
    }
    resolveCompletionItem(item, token) {
        return item;
    }
}
exports.uidCompletionItemProvider = uidCompletionItemProvider;
//# sourceMappingURL=uidCompletionItemProvider.js.map