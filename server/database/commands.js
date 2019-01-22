const { pool } = require('./connection');

//TODO: break these builders into utilities
const fieldBuilder = (fields) => {
    let fieldString = '';

    for( let i = 0; i < fields.length; i++) {
        if(fields.length - 1 > i) {
            fieldString += `${fields[i]}, `;
        } else {
            fieldString += fields[i];
        }
    }

    return fieldString;
};

const valuesBuilder = (values) => {
    let valuesString = '';

    for( let i = 0; i < values.length; i++) {
        if(values.length - 1 > i) {
            valuesString += `${isNumber(values[i])}, `;
        } else {
            valuesString += `${isNumber(values[i])}`;
        }
    }

    return valuesString;
};

const isNumber = (value) => {
    if(typeof value === 'number') {
        return `${Number(value)}`;
    }
    return `'${value}'`;
}

const parametersBuilder = (parametersObj) => {
    let parametersString = '';
    const parametersObjKeys = Object.keys(parametersObj);

    for(let i = 0; i < parametersObjKeys.length; i++) {
        //TODO: clean this long line up
        parametersString += `${parametersObjKeys[i]} = ${typeof parametersObj[parametersObjKeys[i]] !== 'number' ? `'${parametersObj[parametersObjKeys[i]]}'` : `${parametersObj[parametersObjKeys[i]]}`}`;

        if(i < parametersObjKeys.length - 1) {
            parametersString += ' AND '
        }
    }

    return parametersString;
}

const select = (fields = ['*'], table, parameters = {}) => {
    // TODO: add if no tables then throw promise reject?
    const whereClause = Object.keys(parameters).length > 0 ? ` WHERE ${parametersBuilder(parameters)}` : '';
    const query = `SELECT ${fieldBuilder(fields)} FROM ${table}${whereClause}`;
    return pool.query(query);
}

const insert = (table, fields = [], values = []) => {
    if(fields.length !== values.length) {
        throw new Error('Insert Command Error: fields and values do not contain the same amount of entries');
    }

    const query = `INSERT INTO ${table} (${fieldBuilder(fields)}) VALUES (${valuesBuilder(values)})`;
    return pool.query(query);
}

const remove = (table, parametersObj = {}) => {
    // TODO: throw resolve but with a field with error?
    if(!parametersObj || Object.keys(parametersObj).length === 0) {
        return new Promise((resolve,reject) => reject({err: 'missing parameters for deletion'}));
    }

    const parsedParameters = parametersBuilder(parametersObj);

    const query = `DELETE FROM ${table} WHERE ${parsedParameters}`;

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

    const parsedParameters = parametersBuilder(parametersObj);
    const parsedValues = parametersBuilder(valuesObj);

    const query = `UPDATE ${table} SET ${parsedValues} WHERE ${parsedParameters}`;

    return pool.query(query);
}

const commandsObj = {
    select,
    insert,
    remove,
    update
};

module.exports = commandsObj;