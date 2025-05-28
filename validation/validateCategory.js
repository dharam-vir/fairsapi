const { body } = require('express-validator');

const validateCategory = [
    body('category_name')
        .notEmpty().withMessage('Category name is required')
        .isLength({ max: 255 }).withMessage('Category name must be less than 255 characters'),

    body('imagePath')
        .optional()
        .isString().withMessage('Image path must be a string')
        .isLength({ max: 500 }).withMessage('Image path must be less than 500 characters'),

    body('cssClassName')
        .optional()
        .isString().withMessage('CSS class name must be a string')
        .isLength({ max: 100 }).withMessage('CSS class name must be less than 100 characters'),

    body('title')
        .optional()
        .isLength({ max: 255 }).withMessage('Title must be less than 255 characters'),

    body('description')
        .optional()
        .isLength({ max: 1000 }).withMessage('Description must be less than 1000 characters'),

    body('keyword')
        .optional()
        .isLength({ max: 255 }).withMessage('Keyword must be less than 255 characters'),

    body('status')
        .optional()
        .isIn(['yes', 'no']).withMessage('Status must be either "yes" or "no"')
];

module.exports = { validateCategory };
