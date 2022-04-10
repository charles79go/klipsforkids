import { LightningElement, api } from 'lwc';
import util from 'c/utils';

export default class MovieDetails extends LightningElement {

    @api movieDetails;
    @api imageBaseUrl;
    @api backdropBaseUrl;

    trailerAvailable = false;
    trailerList = [];

    rendered = false;
    
    get posterImageSource(){
        return this.imageBaseUrl + this.movieDetails.poster_path;
    }

    get backdropImageSource(){
        return this.backdropBaseUrl + this.movieDetails.backdrop_path;
    }

    get certification(){
        if(this.movieDetails.release_dates === null) return '--'
        let usCert = this.movieDetails.release_dates.results.find(release => release.iso_3166_1 === 'US');
        // if 'US' cert found
        if(usCert) return usCert.release_dates[0].certification;
        // else
        return 'Not Rated';
  
    }
    get casts(){
        let castMems = this.movieDetails.cast.map(cst => cst.name);
        return castMems.length > 0 ? `Starring: ${ castMems.join(', ')}` : '';
    }
    get genre(){
        let gList = this.movieDetails.genres.map(g => g.name);
        return gList.join(', ');
    }
    get releaseDate(){
        return util.displayDate(this.movieDetails.release_date);
    }

    goBackFn(){
        this.dispatchEvent(new CustomEvent('goback'));
    }

    playTrailerFn(){

        this.dispatchEvent(new CustomEvent('playtrailer',{detail: this.trailerList[0].key}));
    }

    connectedCallback(){
        
    }

    renderedCallback(){
        if(this.rendered) return;

        let elem = this.template.querySelector('.movie-details-page');
        elem.style = `background-image: url(${this.backdropBaseUrl + this.movieDetails.backdrop_path})`;

        if(this.movieDetails.videos) {
            this.trailerList = this.movieDetails.videos.results.filter(video => {
                return video.name.toLowerCase().includes('official tr') // capture official trailer only
                        && !video.name.toLowerCase().includes('teaser') 
                        && video.site === 'YouTube';
            });
        }
    
        this.trailerAvailable = this.trailerList.length > 0 ? true : false;

        this.rendered = true;

    }

    //https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg
    //https://image.tmdb.org/t/p/w500/ejgC2lEmuGXiP0A1LvwNezUjNmt.jpg
}
