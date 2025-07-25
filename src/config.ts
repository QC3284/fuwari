import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "QC3284的博客",
	subtitle: "敢于探索",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 215, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://api3-erciyuan-image.xcqcoo.top", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		 {
		   src: 'https://cdn3.xcqcoo.top/jsd/gh/QC3284/233@main/test_db_qc3284.png',    // Path of the favicon, relative to the /public directory
		   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		   sizes: '128x128',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		 }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
           name: '随机二次元',
           url: 'https://api3-erciyuan-image.xcqcoo.top',     // Internal links should not include the base path, as it is automatically added
           external: true,                               // Show an external link icon and will open in a new tab
        },
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://cdn3.xcqcoo.top/jsd/gh/QC3284/233@main/test_db_qc3284.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "QC3284",
	bio: "Dare to explore./敢于探索!",
	links: [
		//{
		//	name: "Twitter",
		//	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
		//	url: "https://twitter.com",
		//},
		//{
		//	name: "Steam",
		//	icon: "fa6-brands:steam",
		//	url: "https://store.steampowered.com",
		//},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/QC3284",
		},
		{
            name: 'Bilibili',
            icon: 'fa6-brands:bilibili',
            url: 'https://space.bilibili.com/510234024',
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
