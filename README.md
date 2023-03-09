# README - Add Contacts assignment

Hi Guy, here are a few thoughts:

1. The way I implemented state in the assignment was by declaring 2 state variables, one for the added users, one for the not-added users.
   I guess it would have been better to just use one state, and derive the not-added contacts within the function.

2. I was unsure what to use for ids, if the names were good enough - then I would have used the names as keys.
   I realize that on mount - the ids change using crypto.randomUUID()

3. In the middle, it hit me that it may have been better to structure the contacts with the ids as keys to each contact, mapping to the inner data...

something like:
data: {
id1: {name: '', image_small, image_large},
id2: {name: '', image_small, image_large},
...
}

this way, I could use the state variable to store only ids as apposed to storing other unnecessary data...

For example when removing a contact - it feels wrong to pass it anything more than an id...

I didn't change it for lack of time :)

Thanks,

Daniel.

===

For what it's worth, I made a pull request on branch 'fixes' @ https://github.com/danield770/add-contacts/pull/1/files
The differences I made in the fixes branch were:

1. Use derived state for 'notAddedContacts' instead of state variable
2. 'Pixel perfect' issues
3. Use css modules instead or regular CSS
