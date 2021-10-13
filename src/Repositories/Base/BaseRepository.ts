/*Essa classe base é responsável por estabelecer a conexão com o SGBD (de mentirinha ^^)*/
class FakeDataBaseModule {
    private SgbdDriver: string;

    constructor(connection: string) {
        this.SgbdDriver = connection;
    }

    public Query(sqlQuery: string, params: any = null): void {
        console.log('Query performed with success for:', sqlQuery);
    }
}

abstract class BaseRepository {

    protected database: FakeDataBaseModule;
    
    constructor(connectionString: string) {
        this.database = new FakeDataBaseModule(connectionString);
    }

    protected Insert(sqlQuery: string, params: any = null): string {
        this.database.Query(sqlQuery, params);
        return 'insert created id';
    }

    protected Get<T>(sqlQuery: string, params: any = null): any {
        const data = {
            prop1: 'prop1',
            prop2: 'prop2'
        }
        return data;
    }
}

export { BaseRepository };