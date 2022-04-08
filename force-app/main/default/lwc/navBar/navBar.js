import { LightningElement } from 'lwc';
import movieNightLogo from '@salesforce/resourceUrl/movienightLogo';

export default class NavBar extends LightningElement {

    isLoaded = false;
    mvlogo = movieNightLogo;
    searchText = '';

    goToHomeFn(){
        this.dispatchEvent(new CustomEvent('gohome'));
    }

    inputEntryFn(e) {
        if (e.keyCode === 13) {
            this.sendEvent(this.searchText);
            this.searchText = '';
            return;
        }
        this.searchText = e.target.value;
    }

    searchMovieFn(e){
        this.sendEvent(this.searchText);
        this.searchText = '';

    }

    sendEvent(value){
        const cusEvent = new CustomEvent('searchbtnclick', {detail: value});
        this.dispatchEvent(cusEvent);
    }
}