"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(url); // set to Response type by type inference
            let data = yield response.json(); // don't need to set type, not using data later
            console.log(data); // data implicitly set to any somehow (exception to rule?)  
        }
        catch (error) {
            if (typeof error === 'string') {
                console.error(error);
            }
            else if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error('An unknown error has occurred.');
            }
        }
    });
}
