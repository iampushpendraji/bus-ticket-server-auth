import { Router } from 'express';
import { register, sign_in, access_token_from_refresh_token, sign_out, sign_out_all, forget_password, verify_forget_password_otp, change_password_with_secret, sso_sign_in_token_send_google } from '../controller/auth.controller';
import { passport } from '../services/sso_login_helper.service';


const router = Router();

router.use(passport.initialize());

router.route('/register').post(register);
router.route('/sign_in').post(sign_in);

// SSO Google Login Routes
router.route('/sign_in_sso_google').get(passport.authenticate('google'));
router.route('/sign_in_sso_google_verify').get(sso_sign_in_token_send_google);


router.route('/access_token_from_refresh_token').get(access_token_from_refresh_token);
router.route('/sign_out').post(sign_out);
router.route('/sign_out_all').post(sign_out_all);
router.route('/forget_password').get(forget_password);
router.route('/verify_forget_password_otp').get(verify_forget_password_otp);
router.route('/change_password_with_secret').post(change_password_with_secret);


export default router;