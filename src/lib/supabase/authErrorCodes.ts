export enum SupabaseAuthErrorCode {
   anonymous_provider_disabled = "anonymous_provider_disabled",
   bad_code_verifier = "bad_code_verifier",
   bad_json = "bad_json",
   bad_jwt = "bad_jwt",
   bad_oauth_callback = "bad_oauth_callback",
   bad_oauth_state = "bad_oauth_state",
   captcha_failed = "captcha_failed",
   conflict = "conflict",
   email_address_not_authorized = "email_address_not_authorized",
   email_conflict_identity_not_deletable = "email_conflict_identity_not_deletable",
   email_exists = "email_exists",
   email_not_confirmed = "email_not_confirmed",
   email_provider_disabled = "email_provider_disabled",
   flow_state_expired = "flow_state_expired",
   flow_state_not_found = "flow_state_not_found",
   hook_payload_over_size_limit = "hook_payload_over_size_limit",
   hook_timeout = "hook_timeout",
   hook_timeout_after_retry = "hook_timeout_after_retry",
   identity_already_exists = "identity_already_exists",
   identity_not_found = "identity_not_found",
   insufficient_aal = "insufficient_aal",
   invite_not_found = "invite_not_found",
   invalid_credentials = "invalid_credentials",
   manual_linking_disabled = "manual_linking_disabled",
   mfa_challenge_expired = "mfa_challenge_expired",
   mfa_factor_name_conflict = "mfa_factor_name_conflict",
   mfa_factor_not_found = "mfa_factor_not_found",
   mfa_ip_address_mismatch = "mfa_ip_address_mismatch",
   mfa_verification_failed = "mfa_verification_failed",
   mfa_verification_rejected = "mfa_verification_rejected",
   mfa_verified_factor_exists = "mfa_verified_factor_exists",
   mfa_totp_enroll_disabled = "mfa_totp_enroll_disabled",
   mfa_totp_verify_disabled = "mfa_totp_verify_disabled",
   mfa_phone_enroll_disabled = "mfa_phone_enroll_disabled",
   mfa_phone_verify_disabled = "mfa_phone_verify_disabled",
   no_authorization = "no_authorization",
   not_admin = "not_admin",
   oauth_provider_not_supported = "oauth_provider_not_supported",
   otp_disabled = "otp_disabled",
   otp_expired = "otp_expired",
   over_email_send_rate_limit = "over_email_send_rate_limit",
   over_request_rate_limit = "over_request_rate_limit",
   over_sms_send_rate_limit = "over_sms_send_rate_limit",
   phone_exists = "phone_exists",
   phone_not_confirmed = "phone_not_confirmed",
   phone_provider_disabled = "phone_provider_disabled",
   provider_disabled = "provider_disabled",
   provider_email_needs_verification = "provider_email_needs_verification",
   reauthentication_needed = "reauthentication_needed",
   reauthentication_not_valid = "reauthentication_not_valid",
   request_timeout = "request_timeout",
   same_password = "same_password",
   saml_assertion_no_email = "saml_assertion_no_email",
   saml_assertion_no_user_id = "saml_assertion_no_user_id",
   saml_entity_id_mismatch = "saml_entity_id_mismatch",
   saml_idp_already_exists = "saml_idp_already_exists",
   saml_idp_not_found = "saml_idp_not_found",
   saml_metadata_fetch_failed = "saml_metadata_fetch_failed",
   saml_provider_disabled = "saml_provider_disabled",
   saml_relay_state_expired = "saml_relay_state_expired",
   saml_relay_state_not_found = "saml_relay_state_not_found",
   session_not_found = "session_not_found",
   signup_disabled = "signup_disabled",
   single_identity_not_deletable = "single_identity_not_deletable",
   sms_send_failed = "sms_send_failed",
   sso_domain_already_exists = "sso_domain_already_exists",
   sso_provider_not_found = "sso_provider_not_found",
   too_many_enrolled_mfa_factors = "too_many_enrolled_mfa_factors",
   unexpected_audience = "unexpected_audience",
   unexpected_failure = "unexpected_failure",
   user_already_exists = "user_already_exists",
   user_banned = "user_banned",
   user_not_found = "user_not_found",
   user_sso_managed = "user_sso_managed",
   validation_failed = "validation_failed",
   weak_password = "weak_password",
}