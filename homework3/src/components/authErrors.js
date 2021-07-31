export default function (errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz e-posta adresi';
        case 'auth/wrong-password':
            return 'Şifre yanlış';
        case 'auth/user-not-found':
            return 'Kullanıcı bulunamadı';
        default:
            return errorCode;
    }
}