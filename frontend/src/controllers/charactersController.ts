import axios from "axios";
import {store} from "../store/storeConfig";
import {fetchActionFailed, fetchActionSuccess} from "../store/actions";

// Controller class to call back-end API to collect data
export class CharactersController {
// function to fetch data from back-end
    fetchDataFromURL = async () => {
        const requestData: {} = {
            // url: 'https://gateway.marvel.com/v1/public/characters?ts=0:00:00&apikey=b55e8bb10f57ad4e20058531ad39c41a&hash=eae968bfa26ac56205c6217d32880545',
            url: 'http://127.0.0.1:8000/api/v1/characters-data',
            method: 'GET',
        }

        axios(requestData).then(async (response: any) => {
            if(response.data.code === 200) {
                await store.dispatch(fetchActionSuccess(response.data.data.results));
            } else {
                await store.dispatch(fetchActionFailed(response.statusText))
            }
        })
    };
}

// creating and exporting controller object
let charactersController = new CharactersController();
export default charactersController;