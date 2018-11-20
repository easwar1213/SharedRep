// in src/dataProvider
import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';
import { v4 as uuid } from 'uuid';
import APIConfig from "./APIConfig.json"





const convertDataProviderRequestToHTTP = (type, resource, params) => {
    let token = localStorage.getItem('token')
    console.log(token);
    let API_URL = APIConfig[resource];
    let options = {}



    switch (type) {

        case GET_LIST: {

            console.log("GET_LIST")
            console.log(params)
            console.log(API_URL)
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            options.headers = new Headers({ Accept: 'application/json', Authorization: token });

            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                filter: JSON.stringify(params.filter),
            };
            console.log(JSON.stringify(query));
            return {
                url: `${API_URL}/${resource}?${stringify(query)}`
                , options: options

            };
        }

        case GET_ONE:

            options.headers = new Headers({ Accept: 'application/json', Authorization: token });
            let query = {
                id: params.id
            }
          
  
            return {
                url: `${API_URL}/${resource}?${stringify(query)}`
                , options: options
            };


        case GET_MANY: {
           
            options.headers = new Headers({ Accept: 'application/json', Authorization: token });
            const query = {
                filter: JSON.stringify({ id: params.ids })
            };

            return {
                url: `${API_URL}/${resource}?${stringify(query)}`,
                options: options
            };
        }


        case GET_MANY_REFERENCE: {
          
            options.headers = new Headers({ Accept: 'application/json', Authorization: token });
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
                filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
            };
            return {
                url: `${API_URL}/${resource}?${stringify(query)}`,
                options: options
            };
        }


        case UPDATE:
 
        
            options.method = 'PUT';
            options.body = JSON.stringify(params)
            options.headers = new Headers({ Accept: 'application/json', Authorization: token });
            return {
                url: `${API_URL}/${resource}`,
                options: options,
            };


        case CREATE:


            options.method = 'POST';
            options.body = JSON.stringify(params.data)
            options.headers = new Headers({ Accept: 'application/json', Authorization: token });
        
            return {
                url: `${API_URL}/${resource}`,
                options: options,
            };


        case DELETE:
            return {
                url: `${API_URL}/${resource}/${params.id}`,
                options: { method: 'DELETE' },
            };
        default:
            throw new Error(`Unsupported fetch action type ${type}`);
    }
};


const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
   
    const { headers, json } = response;
    switch (type) {

        case GET_ONE:
       
            return {
                data: json.data
            }
            break;

        case GET_LIST:
           
            if (resource == "getDailyAssetRunData" || resource == "getDetailedAssetRunData" || resource == "getAssetUtilizationSummary" || resource =="getAssetCurrentData"|| resource =="getCustomerAssets") {
                return response
            }
            else {
                return {
                    data: json.map(x => x),
                    total: parseInt(headers.get('content-range').split('/').pop(), 10),
                };
            }


        case GET_MANY:
        
            let resp = {
                data: json

            }

            return resp
            break;

        case GET_MANY_REFERENCE:
           
            return {
                data: json.map(x => x),
                total: parseInt(headers.get('content-range').split('/').pop(), 10),
            };

        case UPDATE:
            break;

        case CREATE:
            return { data: { ...params.data, id: json.id } };
        default:
            return { data: json };
    }
};


export default (type, resource, params) => {

    const { fetchJson } = fetchUtils;    
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    console.log(url);
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};