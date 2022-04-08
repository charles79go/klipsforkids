import { LightningElement, api} from 'lwc';

export default class GroupSet extends LightningElement {
    @api imageBaseUrl;
    @api groupTitle;
    @api movieList;

}