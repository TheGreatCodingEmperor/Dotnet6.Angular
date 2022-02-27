import { InputText } from "primeng/inputtext";
import { RadioButton } from "primeng/radiobutton";
import { SideBarComponent } from "../components/side-bar/side-bar.component";
import { TopBarComponent } from "../components/top-bar/top-bar.component";

export const PrimengComponents = [
    { name:'input',component: InputText.prototype },
    { name: 'radio',component: RadioButton.prototype }
]