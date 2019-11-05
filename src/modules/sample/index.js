import HomeContainer from './containers/HomeContainer'
import Module from 'asab-webui-kit-lite/abc/Module';


export default class SampleModule extends Module {
    constructor(app, name){
        super(app, "SampleModule");
        app.Router.addRoute({
            path: '/',
            exact: true,
            name: 'Sample Module',
            component: HomeContainer,
            hasHeader: false,
            hasSidebar: false,
            hasBreadcrumb: false,
            hasFooter: false,
            authn: false,
        });
        app.Navigation.addItem({
			name: 'Sample Module',
			url: '/',
            icon: 'icon-shield',
        },)

        // Custom Brand Component in header
        const headerService = app.locateService("HeaderService");
        headerService.setBrandComponent("ASAB Web UI Kit");
    }
}
