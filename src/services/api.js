const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

class Catalog {
    static catalog_data = () => fetch(url).then(answer => answer.json());
}

export default Catalog;