/**
 * @jest-environment jsdom
 */

 const helpers = require("../static/js/helpers");

 describe('render functions', () => {
    const testData = {
        "pid": "6",
        "title": "Testing with jest",
        "message": "This is a post written for the purpose of testing the javascript that helps this site to function.",
            "giphy": "https://media0.giphy.com/media/r7riLSvkCAgSI/200w_d.gif?cid=5c258309bovvidfs0bsa9v66b0dmciomj7pxv53mz9jzg4xm&rid=200w_d.gif&ct=g", 
            "comments": [
                {
                    "cid": 0, 
                    "comment": "This is a test comment.", 
                    "timestamp": 1643899879866
            }
        ], 
        "reactions": { 
            "thumbs_up": ["4876359325"], 
            "thumbs_down": ["4876359325"], 
            "heart": [] 
        }, 
        "tags": [
            "jest", 
            "testing", 
            "javascript"
        ], 
        "timestamp": 1643899841132
    };

    describe('appendPost', () => {
        document.documentElement.innerHTML = '<div><div id="post-sort"></div></div>';
        helpers.appendPost(testData);
        let element = document.querySelector("#post-sort + article");

        it('appends <article> element', () => {
            expect(element).toBeTruthy();
        });

        it('<article> element has correct classes', () => {
            expect(element.classList).toMatchObject({
                '0': 'post',
                '1': 'card',
                '2': 'mb-3'
            });
        });

        it('<article> has 2 children', () => {
            expect(element.children).toHaveLength(2);
        });

        it('first child is <a> tag', () => {
            expect(element.children[0].tagName).toBe('A');
        });

        it('second child is <div> tag with class card-body', () => {
            expect(element.children[1].tagName).toBe('DIV');
            expect(element.children[1].classList.contains('card-body')).toBe(true);
        });
    });
 });
