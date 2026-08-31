namespace NodeJS {
	interface ProcessEnv {
		MAIL_HOST: string;
		MAIL_PORT: number;
		MAIL_USER: string;
		MAIL_PASSWORD: string;
		MAIL_FROM: string;
		MAIL_TO: string;

		NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE: string;
		NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
		NEXT_PUBLIC_DISABLE_RECAPTCHA: string;
		RECAPTCHA_SECRET_KEY: string;
		NEXT_PUBLIC_DOMAIN: string;
	}
}
