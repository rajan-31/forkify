import axios from 'axios';
//import {key,proxy} from '../config';
import {key} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }; 

    async getResults() {
        //we can use fetch but it isn't supported in old browsers which is a problem so we use/ install html request library "axios"
        
        //const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?key=${key}&q=${query}`);
    
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error){
            alert(error);
        }
    };
};
