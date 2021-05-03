import { default as response }from './data.json';

/**
 * This is basically a wrapper around fetch API
 * create a class for extendability
 */
export class JsonRetrievalClient {
    /**
     * @param url the URL to the JSON file
     */
    constructor() {

    }

    fetchJSON() {
        return new Promise((resolve, reject) => {
           resolve(response);
        });
    }
}