import axios from "axios";

/*
// Rodar com IPV4: json-server --watch -d 180 --host "Seu IP(comando: ipconfig para buscar)" db.json 
 */

const api = axios.create({
    baseURL: 'http://192.168.100.77:3000'
})

export default api;