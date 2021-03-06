var assert = require('assert'),
    chai = require('chai'),
    { Collection } = require('../../collection.js');

var CollectionData = [{
    'forename': 'Mary',
    'surname': 'Lamb',
    'age': 45,
    'email': 'mary.lamb@family.com',
    'home': {
        'city': 'London',
        'country': 'United Kingdom'
    },
    'hobbies': ['Music', 'Swimming']
}, {
    'forename': 'Lucy',
    'surname': 'Lamb',
    'age': 43,
    'email': 'lucy.lamb@family.com',
    'home': {
        'city': 'Middlesbrough',
        'country': 'United Kingdom'
    },
    'hobbies': ['Boxing', 'Science']
}, {
    'forename': 'Steven',
    'surname': 'Lamb',
    'age': 12,
    'email': 'steven.lamb@family.com',
    'home': {
        'city': 'London',
        'country': 'United Kingdom'
    },
    'hobbies': ['Reading']
}, {
    'forename': 'Joseph',
    'surname': 'Pearson',
    'age': 87,
    'email': 'joseph.pearson@family.com',
    'home': {
        'city': 'London',
        'country': 'United Kingdom'
    },
    'hobbies': []
}];

var FamilyCollection = new Collection(CollectionData);

describe('Collection where.', function() {
    describe('where() and orWhere()', function() {
        it('Where forename is equal to Lucy', function() {
            var Where = FamilyCollection.where('forename', 'Lucy').all();
            chai.expect(Where).to.be.an('array');
            chai.expect(Where.length).to.equal(1);
        });

        it('Where forename is equal to Lucy or surname equal to Pearson', function() {
            var orWhere = FamilyCollection.where('forename', 'Lucy').orWhere('surname', 'Pearson').all();
            chai.expect(orWhere).to.be.an('array');
            chai.expect(orWhere.length).to.equal(2);
        });

        it('Where \'home.city\' is equal to \'London\'', function() {
            var Equal = FamilyCollection.where('home.city', '=', 'Middlesbrough').all();
            chai.expect(Equal).to.be.an('array');
            chai.expect(Equal.length).to.equal(1);
        });

        it('Where \'hobbies.1\' is equal to \'Science\'', function() {
            var Equal = FamilyCollection.where('hobbies.1', '=', 'Science').all();
            chai.expect(Equal).to.be.an('array');
            chai.expect(Equal.length).to.equal(1);
        });
    });

    describe('where() operators', function() {
        it('(=) Where forename is equal to Lucy', function() {
            var Equal = FamilyCollection.where('forename', '=', 'Lucy').all();
            chai.expect(Equal).to.be.an('array');
            chai.expect(Equal.length).to.equal(1);
        });

        it('(>) Where age is greater than 45', function() {
            var greaterThan = FamilyCollection.where('age', '>', 45).all();
            chai.expect(greaterThan).to.be.an('array');
            chai.expect(greaterThan.length).to.equal(1);
        });

        it('(>=) Where age is greater than or equal to 45', function() {
            var greaterThan = FamilyCollection.where('age', '>=', 45).all();
            chai.expect(greaterThan).to.be.an('array');
            chai.expect(greaterThan.length).to.equal(2);
        });

        it('(<) Where age is less than 45', function() {
            var lessThan = FamilyCollection.where('age', '<', 45).all();
            chai.expect(lessThan).to.be.an('array');
            chai.expect(lessThan.length).to.equal(2);
        });

        it('(<=) Where age is less than or equal to 45', function() {
            var lessThan = FamilyCollection.where('age', '<=', 45).all();
            chai.expect(lessThan).to.be.an('array');
            chai.expect(lessThan.length).to.equal(3);
        });
    });
});
