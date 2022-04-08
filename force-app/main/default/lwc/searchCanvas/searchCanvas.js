import { LightningElement, api } from 'lwc';

export default class SearchCanvas extends LightningElement {

    @api searchValue;
    @api searchResults = [];
    @api imageBaseUrl;

    goToHomeFn(){
        this.dispatchEvent(new CustomEvent('gohome'));
    }

    get searchMessage(){
        return this.searchResults.length === 0 
            ? `No Results for "${this.searchValue}"` 
            : `Search Results for "${this.searchValue}"`;
    }
}