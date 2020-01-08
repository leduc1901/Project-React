import {
    ADD_PERSON,
    REMOVE_PERSON
  } from './actionTypes'
  
  export const addPerson = (person) => {
    return {
      type: ADD_PERSON,
      person
    }
  }
  export const removePerson = (person) => {
    return {
      type: REMOVE_PERSON,
      person
    }
  }