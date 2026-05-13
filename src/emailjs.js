import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_p2qgcvg";
const PUBLIC_KEY  = "TbhYqUz0TcxJxGqlT";

// Template admin (toi)
export const TEMPLATE_ADMIN  = "template_skchon2";
// Template client (confirmation)
export const TEMPLATE_CLIENT = "template_710cc6g";

// Initialiser EmailJS une seule fois
emailjs.init(PUBLIC_KEY);

export default emailjs;
