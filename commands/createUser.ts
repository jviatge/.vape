import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class addUser {
    static async run() {
        const password = await bcrypt.hash("password", 10);

        const response = await prisma.users.create({
            data: {
                role: "super_admin",
                last_name: "Josex",
                first_name: "Dufion",
                email: "test@test.com",
                password,
            },
        });

        console.table(response);

        return process.exit(0);
    }
}

addUser.run();
