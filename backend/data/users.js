import bcrypt from 'bcrypt'

const users =[
    {
        name: 'Admin',
        email: 'adminexample@gmail.com',
        password:bcrypt.hashSync('12345', 10),
        isAdmin: true

    },
    {
        name: 'Ubaid',
        email: 'ubaidexample@gmail.com',
        password:bcrypt.hashSync('12345', 10),
       
    },
    {
        name: 'Haider',
        email: 'haiderexample@gmail.com',
        password:bcrypt.hashSync('12345', 10),
       
    },
]
    
export default users

