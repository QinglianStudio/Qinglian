import Db from "."

describe('Mysql Test',() => {
    it('should connection mysql',async () => {
        const mockConfig = {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '123456',
            database: 'test',
            synchronize: false,
        }
        const db = new Db(mockConfig);
        expect(db).not.toBeNull();
        const instance = db.getInstance();
        expect(instance).not.toBeNull();
    })
})