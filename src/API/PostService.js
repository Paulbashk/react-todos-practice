export default class PostService {
    // Получение данных по URL
    static async getAll(url) {
        const response = await (await fetch(url)).json();

        return response;
    }
    static async getById(id) {
        const response = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();

        return response;
    }
}