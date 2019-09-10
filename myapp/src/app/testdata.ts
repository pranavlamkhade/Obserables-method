import { InMemoryDbService } from 'angular-in-memory-web-api';


export class TestData implements InMemoryDbService {
    createDb() {
        let bookDetails = [
            {id: 100, name: 'pranav', category: 'Angular'},
            {id: 101, name: 'Ankush', category: 'java'},
            {id: 102, name: 'Ganesh', category: 'Angular'}
        ];
        return { books : bookDetails };
    }
}