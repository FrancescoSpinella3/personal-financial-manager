// Database key
const USERS_KEY = "pfm_users";

// Default test user
const defaultUsers = [
    {
        id: 1,
        name: "Francesco",
        lastName: "Spinella",
        birthdate: "02/08/2000",
        gender: 'Maschio',
        email: "test@email.com",
        password: "test123",
        profileImage: null,
    }
];

// Initialize databse
export function initFakeDB() {
    if (!localStorage.getItem(USERS_KEY)) {
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
}

// Get all users
export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Register new user
export function registerUser({ name, lastName, birthdate, gender, email, password, profileImage}) {
    const users = getUsers();

    // Check duplicated email
    const exists = users.some(u => u.email === email);
    if (exists) {
        throw new Error("Email already exist");
    }

    const newUser = {
        id: Date.now(),
        name,
        lastName,
        birthdate,
        gender,
        email,
        password,
        profileImage
    }

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return newUser;
}

// User login
export function loginUser(email, password) {
    const users = getUsers();
    return users.find(u => u.email === email && u.password === password) || null
}

// Update user by id
export function updateUser(id, updates) {
    const users = getUsers();
    const idUser = users.findIndex(user => user.id === id);
    if (idUser === -1 ) {
        throw new Error("User not found");
    }

    users[idUser] = {...users[idUser], ...updates};
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return users[idUser];
}

// Reset database (only for development)
export function resetDB() {
    localStorage.removeItem(USERS_KEY);
}