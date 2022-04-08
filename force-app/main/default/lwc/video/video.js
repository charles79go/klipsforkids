import { LightningElement, api } from 'lwc';

export default class Video extends LightningElement {
    @api trailerPath;

    exitTrailerFn(){
        this.dispatchEvent(new CustomEvent('exittrailer'));
    }
}