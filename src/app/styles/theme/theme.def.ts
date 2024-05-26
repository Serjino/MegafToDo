// export interface ITheme {
// 	colors: {
// 		text: {
// 			main: string;
// 		};
// 		primary: string;
// 		background: string;
// 	};
// 	spacing: number;
// 	spaces: {[key: string]: string};
// 	getSpacing: (number: number) => string
// }

export interface ThemeInstance {
	spacing: number;
	colors: { text: { main: string }; primary: string; background: string };
	spaces: { sectionSpacingX: string; sectionSpacingY: string };
	getSpacing: (number: number) => string;
}
