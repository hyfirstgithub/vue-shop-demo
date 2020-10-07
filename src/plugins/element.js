import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Main,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Select,
    Option,
    Row,
    Col
} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Option)
Vue.use(Select)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.prototype.$message = Message