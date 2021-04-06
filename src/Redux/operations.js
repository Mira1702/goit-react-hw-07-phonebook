import * as actions from './actions';

const contactsAPI = 'http://localhost:3000';

export const fetchContact = () => async (dispatch) => {
    dispatch(actions.fetchContactRequest());

    try {
        const contacts = await contactsAPI.fetchContact();
        dispatch(actions.fetchContactSuccess(contacts));
    } catch (error) {
        dispatch(actions.fetchContactError(error));
    }
};

export const addContact = (contact) => async (dispatch) => {
    dispatch(actions.addContactRequest());

    try {
        const contacts = await contactsAPI.addContact(contact);
        dispatch(actions.addContactSuccess(contacts));
    } catch (error) {
        dispatch(actions.addContactError(error));
    }
};

export const deleteContact = (contactId) => async (dispatch) => {
    dispatch(actions.deleteContactRequest());

    try {
        const contacts = await contactsAPI.deleteContact(contactId);
        dispatch(actions.deleteContactSuccess(contacts));
    } catch (error) {
        dispatch(actions.deleteContactError(error));
    }
};
