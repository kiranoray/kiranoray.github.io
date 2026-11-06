import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	title: "支持本站",
	description: "如果内容对你有帮助，欢迎请我喝杯咖啡。",
	usage: "",
	showSponsorsList: false,
	showComment: true,
	showButtonInPost: true,
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			qrCode: "/assets/images/sponsor/alipay.jpg",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.jpg",
			enabled: true,
		},
	],
	sponsors: [],
};
