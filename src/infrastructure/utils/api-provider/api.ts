import axios from 'axios';


import { URL_API } from '../../@shared/config/env-manager'


export const api = axios.create({
  baseURL: URL_API,
});

