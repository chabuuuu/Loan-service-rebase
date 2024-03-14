const bcrypt = require('bcrypt');

export async function hashPassword (password: string): Promise<any>{
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}