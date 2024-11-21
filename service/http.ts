class Http {
    private static baseUrl = "http://192.168.0.105:4400/api";

    static async get(path: string) {
        try {
            const response = await fetch(`${this.baseUrl}${path}`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async post(path: string, data: any) {
        try {
            const response = await fetch(`${this.baseUrl}${path}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}
export default Http;