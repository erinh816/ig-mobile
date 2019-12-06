export const updateEmail = (email) => {
    return { type: 'UPDATE_EMAIL', payload: email }
}

export const updatePassword = (password) => {
    return { type: 'UPDATE_PASSWORD', payload: password }
}

export const updateUsername = (username) => {
    return { type: 'UPDATE_USERNAME', payload: username }
}

export const updateBio = (bio) => {
    return { type: 'UPDATE_BIO', payload: bio }
}


//we can make all parameter and payload to input or something exactly the same
//it doesn't matter