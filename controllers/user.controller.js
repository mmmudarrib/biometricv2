const { user, Sequelize } = require("../models");
const Op = Sequelize.Op;
let self = {};

/**
* @description Get All Users
* @type GET
* @path /api/users
* @param {*} req
* @param {*} res
* @returns JSON
*/
self.getAll = async (req, res) => {
    try {
        let data = await user.findAll({});
        return res.status(200).json({
        success: true,
        count: data.length,
        data: data
        })
        } catch (error) {
        res.status(500).json({
        success: false,
        error: error
        })
        }
}

/**
* @description Create New User
* @type POST
* @path /api/users/
* @param {*} req
* @param {*} res
* @returns JSON
*/
self.createUser = async (req, res) => {
    if (!req.body.name || !req.body.fingerprint) {
        return res.status(400).send({
        success: false,
        message: "Content can not be empty!"
        });
        }
        try {
        const newUser = {
        name: req.body.name,
        fingerprint: req.body.fingerprint,
        isSync:req.body.issync
        };
        let data = await user.create(newUser);
        return res.status(201).json({
        success: true,
        data: data
        })
        } catch (error) {
        return res.status(500).json({
        success: false,
        error: error
        })
        }
        
}
/**
* @description Get Single User info by id
* @type GET
* @path /api/users/:id
* @param {*} req
* @param {*} res
* @param {Number} — id — user id
* @returns JSON
*/
self.get = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await user.findByPk(id);
        if (data)
        return res.status(200).json({
        success: true,
        data: data
        })
        else
        return res.status(400).json({
        success: false,
        error: "No such user present",
        data: []
        })
        } catch (error) {
        res.status(500).json({
        success: false,
        error: error
        })
        }
}
/**
* @description Update User data
* @type PUT
* @path /api/users/:id
* @param {*} req
* @param {*} res
* @returns JSON
*/
self.updateUser = async (req, res) => {}
/**
* @description Delete user with the specified id in the request
* @type DELETE
* @path /api/users/:id
* @param {*} req
* @param {*} res
* @returns JSON
*/
self.delete = async (req, res) => {}
/**
* @description Delete all users from the database
* @type DELETE
* @path /api/users/
* @param {*} req
* @param {*} res
* @returns JSON
*/
self.deleteAll = async (req, res) => {};
module.exports = self;