const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    phoneNumber: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)
/*
let post = require('../Data/post.json')
const filename = './data/post.json'
const helper = require('../helpers/helper.js')


function getPosts() {
    return new Promise((resolve, reject) => {
        if (post.length == 0) {
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(post)
    })    
}

function getPost(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(post, id) 
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}
module.exports = {
    getPosts,
    getPost
}
*/