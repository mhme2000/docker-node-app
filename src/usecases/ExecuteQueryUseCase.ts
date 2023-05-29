// Importação da lib postgres
import pg from 'pg';
export async function executeQuery(script : string) {
    var result;
    const client = new pg.Client({
        host: "localhost",
        user: "postgres",
        password: "123456",
        port: 5432,
    });
    try {     
        await client.connect();
        result = await client.query(script);
    } catch (err) {
        throw err;
    } finally {
        console.info(result, client, script);
        if (client) client.end();
        return result;
    }
}
