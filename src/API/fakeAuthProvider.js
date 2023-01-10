
// API которое иммулирует подключение к бд и обработки запросов
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(cb) { // Авторизация
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) { // Выход
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

export { fakeAuthProvider };