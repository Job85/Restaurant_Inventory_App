const { Router } = require('express')
const db = require('../db')
const { Department } = require('../models')

const getDepartment = async (req, res) => {
    let gotDepartment = await Department.find({})
    console.log('Got Department')
    res.send(gotDepartment)
}

const createDepartment = async (req, res) => {
    const department = new Department(
        req.body
    )
    await department.save()
    console.log('Created Department')
    res.send(department)
}

const updateDepartment = async (req, res) => {
    let putsDepartment = await Department.findOneAndUpdate({})
    console.log('Updated Department!')
    res.send(putsDepartment)
}

const deleteDepartment = async (req, res) => {
    let deletedDepartment = await Department.findOneAndRemove({})
    console.log('deletedDepartment')
    res.send(deletedDepartment)
}

module.exports = {
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
}