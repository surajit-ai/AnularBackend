const ContactModel = require('../models/contact_model')


const ContactCTRL = {
    createContact: async (req, res) => {
        const ContactMsg = req.body;
        const newContactMsg = new ContactModel(
            {
                ...ContactMsg, createdAt: new Date().toISOString()
            }
        );
        try {
            await newContactMsg.save();
            res.status(201).json({
                message: `Message is Send Sucessfully`
            });
        }
        catch (error) {
            res.status(409).json({
                message: error.message,
            });
        }
    },
    getLists: async (req, res) => {
        try {
            const AllContactList = await ContactModel.find();
            res.status(200).json({
                message: 'All Contact List',
                AllContactList,
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            });
        }
    },
    getList: async (req, res, next) => {
        const { id } = req.params;
        try {
            const SingleContact = await ContactModel.findById(id);
            res.status(200).json({
                message: `Contact of this ${id} found`,
                SingleContact,
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            });
        }


    },
};

module.exports = ContactCTRL;