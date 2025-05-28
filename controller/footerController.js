
const footerModule = require('../models/footerModule');

const Footerurl = async (req, res) => {
  try {
    const urldetails = await footerModule.findAll();

    if (!urldetails || urldetails.length === 0) {
      return res.status(404).json({ message: 'Footer data not found' });
    }

    return res.status(200).json(urldetails);
  } catch (err) {
    console.error("Error fetching footer data:", err);
    return res.status(500).json({ error: err.message });
  }
};

const PostFooterurl = async (req, res) => {
  try {
    const { logo_url, logo_link, description } = req.body;

    // Basic validation (you can expand this as needed)
    const isValidURL = /^[a-zA-Z0-9\-/:.]+$/.test(logo_url) && /^[a-zA-Z0-9\-/:.]+$/.test(logo_link);
    const isValidDesc = typeof description === 'string' && description.length > 0;

    if (!isValidURL || !isValidDesc) {
      return res.status(400).json({ error: 'Invalid input. Only letters, numbers, hyphens, and basic punctuation are allowed.' });
    }

    const newFooter = await footerModule.create({
      logo_url,
      logo_link,
      description
    });

    return res.status(201).json({ message: 'Footer data submitted successfully', data: newFooter });

  } catch (error) {   
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { Footerurl, PostFooterurl }