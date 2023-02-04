export const SITE_URL = 'http://127.0.0.1:5173/';
export const APPROVED_POSTERS_GH_USERNAME = ['sw-yx'];
export const GH_USER_REPO = 'sw-yx/swyxkit'; // used for pulling github issues and offering comments
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const SITE_TITLE = 'PT PARAMA BARA INTERCONTINENTAL';
export const SITE_DESCRIPTION = "PT Mining Energy Resources sites";
export const DEFAULT_OG_IMAGE =
	'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png';
export const MY_TWITTER_HANDLE = 'swyx';
export const MY_YOUTUBE = 'https://youtube.com/swyxTV';
export const RSS_URL = SITE_URL + '/api/rss.xml';
export const EMAIL = SITE_URL + 'admin@site.com';
// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
