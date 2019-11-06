const db = require('../data/db-config');

module.exports = {
    find,
    findById, 
    add, 
    update, 
    remove,
    findSteps,
    addStep
  }
  
function find(){
  return db('schemes')
}

function findById(id){
  return db('schemes')
  .where({'schemes.id': id})
  
}

function add(schemeData){
  return db('schemes')
  .insert(schemeData)
}

function update(changes, id){
  console.log(id, {id}, changes);
  return db('schemes')
  .where({id})
  .update(changes)
}

function remove(id){
  return db('schemes')
  .where({id})
  .del()
}
function findSteps(id) {
  console.log(id);
  return db('schemes as sc')
  .join('steps as st', 'sc.id', 'st.scheme_id')
  .where("sc.id",'=', id )
  .select('st.id', 'st.step_number', 'st.instructions', 'st.scheme_id') 
}
function addStep(stepData, id){
  return db('steps')
  .insert({...stepData, scheme_id: id})
  .where({id})
}
