import { Person } from "../Entities/ClassBased/Person";
import TPerson from "../Entities/InterfaceBased/TPerson";

class ObjectCreationCommand {

    constructor() { }
    
    public CreateClassBasedObject(): void {
        console.log();
        const classBasedPerson = new Person({
            FirstName: 'Fagner',
            LastName: 'Oliveira',
            Age: 12
        });

        classBasedPerson.setBiography('I\'m class based object...');
        console.log('Class based object',  classBasedPerson);
        console.log();
    }

    public CreateInterfaceBasedObject(): void {
        const interfaceBasedPerson: TPerson = {
            FirstName: 'Fagner',
            Age: 15,
            Biography: 'I\'m a interface based object...'
        }

        console.log('Interface based person', interfaceBasedPerson);
    }
}

export  {ObjectCreationCommand };