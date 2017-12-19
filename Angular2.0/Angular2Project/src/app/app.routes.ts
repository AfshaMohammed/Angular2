import {LayoutComponent} from './layout/layout.component';
import {DataComponent} from './data/data.component';
import {provideRoutes} from "@angular/router";

const APP_ROUTES=[
	{path: '', component:LayoutComponent},
	{path: '', component:DataComponent}
];
export const APP_ROUTES_PROVIDER = [
		provideRoutes(APP_ROUTES)
];