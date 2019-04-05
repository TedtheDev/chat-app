const _squel = require( 'squel');
const squel = _squel.useFlavour('postgres');
const { pool } = require('./connection');

//TODO: put this into utilities folder
const newfieldBuilder = (instance, fields) => {
    fields.forEach(field => instance.field(field));
}

const parseParam = (param) => {
 return typeof param !== 'number' ? `'${param}'` : param;
}

const paramBuilder = (instance, parameters) => {
    Object.keys(parameters).forEach(param => instance.where(`${param} = ${parseParam(parameters[param])}`));
}

const valuesBuilder = (instance, fieldValues) => {
    Object.keys(fieldValues).forEach(field => instance.set(field, fieldValues[field]));
}

const select = (table, fields = ['*'], parameters = {}) => {
    // TODO: add if no tables then throw promise reject?
    const squelInstance = squel.select()
                        .from(table);
    newfieldBuilder(squelInstance, fields);
    paramBuilder(squelInstance, parameters);
    const newQuery = squelInstance.toString();
    
    return pool.query(newQuery);
}

const insert = (table, fieldValues = {}) => {
    if(!fieldValues) {
        throw new Error('Insert Command Error: fields and values do not contain the same amount of entries');
    }

    const squelInstance = squel.insert().into(table);
    valuesBuilder(squelInstance, fieldValues);
    const newQuery = squelInstance.toString();
    
    return pool.query(newQuery);
}

const remove = (table, parametersObj = {}) => {
    // TODO: throw resolve but with a field with error?
    if(!parametersObj || Object.keys(parametersObj).length === 0) {
        return new Promise((resolve,reject) => reject({err: 'missing parameters for deletion'}));
    }

    const squelInstance = squel.delete().from(table);
    paramBuilder(squelInstance, parametersObj);
    const query = squelInstance.toString();

    return pool.query(query);
}

const update = (table, valuesObj ={}, parametersObj = {}) => {
    // TODO: throw resolve but with a field with error?
    if(!parametersObj || Object.keys(parametersObj).length === 0) {
        return new Promise((resolve,reject) => reject({err: 'missing parameters for update'}));
    }
    
    if(!valuesObj || Object.keys(valuesObj).length === 0) {
        return new Promise((resolve, reject) => reject({err: 'missing values for update'}));
    }

    const squelInstance = squel.update().table(table);
    valuesBuilder(squelInstance, valuesObj);
    paramBuilder(squelInstance, parametersObj);
    const newQuery = squelInstance.toString();

    return pool.query(newQuery);
}

const commandsObj = {
    select,
    insert,
    remove,
    update
};

module.exports = commandsObj;