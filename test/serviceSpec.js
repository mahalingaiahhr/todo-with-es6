import * as service from '../src/service';

describe('service', () => {
    var todo;
    beforeEach(() => {
        todo = {task:'test task', date: '21/02/2016'};
    });

    it('.save should save todo', () => {
        return service.save(todo).then((todopromise) => {
            expect(todopromise).to.include.keys('id');
            expect(todopromise.task).to.be.equal('test task');
        });
    });

});
