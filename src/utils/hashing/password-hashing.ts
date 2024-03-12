const bcrypt = require('bcrypt');

export async function hashPassword (password: string): Promise<any> {
    const saltRounds = 10;
    // await bcrypt.genSalt(saltRounds, async function(err: any, salt: any) {
    //   await bcrypt.hash(password, salt, async function(err: any, hash: any) {
    //     if (err){
    //         throw err
    //     }
    //       return hash
    //   });
    // });
    const hashed_password = await bcrypt.hash(password, saltRounds, async function(err: any, hash: any) {
        return hash
    });
    return hashed_password
}