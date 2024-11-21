import { User } from "@/types/user";
import Http from "./http";

class UserService extends Http {
    static async getUser() {
        try {
            const users = await this.get("/user");
            return users;
        } catch (error) {
            throw error;
        }
    }

    static async createUser(data: Omit<User, "id">) {
        try {
            const newUser = await this.post("/user", data);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    static async login(data: Pick<User, "email" | "password">) {
        try {
            const response = await this.post("/auth/login", data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;