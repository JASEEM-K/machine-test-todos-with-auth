function getEnv(name: string) {
    const env = process.env[name];
    if (!env) {
        console.log(`ENV ERROR: ${name} is not Provided`);
        process.exit(1);
    }
    return env;
}

export const PORT = getEnv("PORT");
export const MONGO_URI = getEnv("MONGO_URI");
export const JWT_SECRET = getEnv("JWT_SECRET");
