
export class API {
    constructor() {
        this.key = "BgbT7j9Ptpc8zYi8uTlBfjhHhpmfgJqwtffiWTHFKPgCfY6R08IzYW5o"
        this.query = "";
        this.many_images = "";
    }

    set_query(query) {
        this.query = query;
    }

    set_many_images(quantity) {
        this.many_images = quantity;
    }

    async call_API() {
        const request = await fetch(
            `https://api.pexels.com/v1/search?query=${this.query}&per_page=${this.many_images}`,
            {
                headers: { 'Authorization': this.key }
            })
        const response = await request.json()
        return response;
    }

    async category_request(category) {
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${this.query}&per_page=${80}`,
            {
                headers: { 'Authorization': this.key }
            })
        const bunch = await response.json()
        return bunch;
    }
}


