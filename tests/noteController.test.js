const { expect } = require('chai');
const noteController = require('../controllers/noteController');

describe('noteController validation', () => {


    // Test for createNote 
    it('createNote was not successful', async () => {
        
        const req = {
            body: {
                title: 'test note',
                // content is missing
            },
            user: {
                _id: "507f1f77bcf86cd799439011"
            }
        };

        let statusCode;

        const res = {
            status: (code) => {
                statusCode = code;
                return res;
            },
        
            json: () => {}
        }
        
        await noteController.createNote(req, res);
        expect(statusCode).to.equal(400);
    })


    // Test for updateNote 

    it('updateNote was not successful', async () => {

        const req = {
            params: {
                id: "not-a-valid-id"
            },
            body: {
                title: "Updated title",
                content: "Updated content"
            },
            user: {
                _id: "507f1f77bcf86cd799439011"
            }
        };

        let statusCode;

        const res = {
            status: (code) => {
                statusCode = code;
                return res;
            },
        
            json: () => {}
        }
    
        await noteController.updateNote(req, res);
        expect(statusCode).to.equal(400);
    });


    // Test for deleteNote
    it("delete note was not successful", async () => {

        const req = {
            params: {
                id: "not-a-valid-id"
            },
            user: {
                _id: "507f1f77bcf86cd799439011"
            }
        };

        let statusCode;

        const res = {
            status: (code) => {
                statusCode = code;
                return res;
            },

            json: () => {}
        };

        await noteController.deleteNote(req, res);

        expect(statusCode).to.equal(400);
    });


});