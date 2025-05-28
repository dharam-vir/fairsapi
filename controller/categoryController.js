const { validationResult } = require('express-validator');
const Category = require('../models/categoryModel')

const create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            massege: 'Validation failed',
            errors: errors.array()
        })
    }
    try {
        const {
            category_name,
            url,
            imagePath,
            cssClassName,
            title,
            description,
            keyword,
            status
        } = req.body;

        // ✅ Duplicate check
        const existing = await Category.findOne({ where: { category_name } });
        if (existing) {
            return res.status(409).json({
                message: `Category "${category_name}" already exists`
            });
        }

         // ✅ Create new category
         const newCategory = await Category.create({
            category_name,
            url,
            imagePath,
            cssClassName,
            title,
            description,
            keyword,
            status: status || 'yes'
        });

        return res.status(201).json({
            message: 'Category created successfully',
            category: newCategory
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Failed to create category'
        });
    }
}

const read = async (req, res) => {
    try {
        // Get page and limit from query string (default: page=1, limit=10)
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Category.findAndCountAll({
            where: { status: 'yes' },
            attributes: [
                'id',
                'category_name',
                'url',
                'imagePath',
                'cssClassName',
                'title',
                'description',
                'keyword',
                'status',
                'createdAt',
                'updatedAt'
            ],
            limit,
            offset,
            order: [['createdAt', 'DESC']] // Optional: order newest first
        });

        return res.status(200).send({
            message: 'All Active Categories',
            category: rows,
            pagination: {
                total: count,
                page,
                limit,
                totalPages: Math.ceil(count / limit)
            }
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message || 'Internal Server Error'
        });
    }
};

const update = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}

const categoryDelete = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}

const list = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}

const search = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}


module.exports = { create, read, update, categoryDelete, search, list }
