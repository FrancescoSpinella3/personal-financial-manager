// Database key
const USERS_KEY = "pfm_users";

// Default test user
const defaultUsers = [
    {
        id: 1,
        name: "Francesco",
        lastName: "Spinella",
        birthday: "02/08/2000",
        gender: 'maschio',
        email: "test@email.com",
        password: "test123"
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
export function registerUser({ name, lastName, birthday, gender, email, password }) {
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
        birthday,
        gender,
        email,
        password
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

// Reset database (only for development)
export function resetDB() {
    localStorage.removeItem(USERS_KEY);
}