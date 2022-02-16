// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//return a contact object
return {
        id : id, 
        nameFirst : nameFirst, 
        nameLast : nameLast, 
        
}
}



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];//<----contact list
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        addContact: function(contacts) {
            
            //add contact objects to contacts
            contacts.push(contacts); //return??
        }, 
        findContact: function(fullName) {
            
            //iterate through contacts array
            for (var i = 0; i <= contacts.length - 1; i++){
                //make a conditional statement
                if (contacts[i][nameFirst] + " " + [nameLast] === fullname) {
                    //return result
                    return contacts[i]; 
                }
                //return result
                else {
                return "undefined"; 
                }
        }
    },
            removeContact: function(contacts) {
                //iterate through array
                for (var i = 0; i <= contacts.length - 1; i++) {
                //make make conditional statement
                if (nameFirst === nameFirst && nameLast === nameLast) {
                    //remove contacts that satisfy conditional
                    contacts.splice(i, 1); 
                }
                }
            },

                printAllContactNames: function(contacts) {
                //loop through array
                return contacts.join("\r\n"); 
                }
               
                

            }
        
        }
     





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
