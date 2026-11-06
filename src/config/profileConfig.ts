import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/avatar/myavatar-03.jpg",
	name: "kirano",
	bio: "不一定要往高处走，可以往四处走走，去寻找自己喜欢的生活方式，人生来不是为了拼了命的扮演工作。",
	links: [{
		name: "GitHub",
		url: "https://github.com/kiranoray",
		icon: "fa7-brands:github",
		showName: true
	},{
		name: "Bilibili",
		url: "#",
		icon: "simple-icons:bilibili",
		showName: true
	},{
		name: "微信",
		url: "#",
		icon: "fa7-brands:weixin",
		showName: true
	},{
		name: "Email",
		url: "#",
		icon: "fa7-solid:envelope",
		showName: true
	}
	// ,{
	// 	name: "RSS",
	// 	url: "https://kiranoray.github.io/rss.xml",
	// 	icon: "material-symbols:rss-feed-rounded",
	// 	showName: true
	// },
	],
};
