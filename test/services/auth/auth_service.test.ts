import '../../../src/services/auth/auth_service';
import AuthServiceMock from './auth_service_mock';

const authService = new AuthServiceMock();

test('should be success login', async () => {

    const result = await authService.loginWithEmailAndPassword({ email: 'ahmet@email.com', password: 'ahmet' });

    expect(result.isRight()).toBeTruthy();
});

test('should be failed login. reason: wrong e-mail or pw', async () => {
    const result = await authService.loginWithEmailAndPassword({ email: 'wrong@email.com', password: 'wrong' });
    expect(result.isLeft).toBeTruthy();
});

test('should be success register', async () => {
    const result = await authService.registerWithEmail({ email: 'ahmet@email.com', password: '123456' });

    expect(result.isRight()).toBeTruthy();
});

test('^should be failed to register. reason: e-mail exist', async () => {
    const result = await authService.registerWithEmail({ email: 'exist@email.com', password: 'exist123' });

    expect(result.isLeft()).toBeTruthy();
});
