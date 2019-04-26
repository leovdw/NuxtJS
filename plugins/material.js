import {MDCRipple}          from '@material/ripple/index';
import {MDCChipSet}         from '@material/chips';
import {MDCDialog}          from '@material/dialog';
import {MDCList}            from '@material/list';
import {MDCDrawer}          from "@material/drawer";
import {MDCFormField}       from '@material/form-field';
import {MDCCheckbox}        from '@material/checkbox';
import {MDCFloatingLabel}   from '@material/floating-label';
import {MDCLineRipple}      from '@material/line-ripple';
import {MDCNotchedOutline}  from '@material/notched-outline';
import {MDCRadio}           from '@material/radio';
import {MDCSelect}          from '@material/select';
import {MDCSelectHelperText} from '@material/select/helper-text';
import {MDCSelectIcon}      from '@material/select/icon';
import {MDCSlider}          from '@material/slider';
import {MDCMenuSurface}     from '@material/menu-surface';
import {MDCMenu}            from '@material/menu';
import {MDCSnackbar}        from '@material/snackbar';
import {MDCTabBar}          from '@material/tab-bar';
import {MDCTabIndicator}    from '@material/tab-indicator';
import {MDCTabScroller}     from '@material/tab-scroller';



export default (ctx, inject) => {
  inject('MDC', {
    'Ripple'          : MDCRipple,
    'ChipSet'         : MDCChipSet,
    'Dialog'          : MDCDialog,
    'List'            : MDCList,
    'Drawer'          : MDCDrawer,
    'FormField'       : MDCFormField,
    'Checkbox'        : MDCCheckbox,
    'FloatingLabel'   : MDCFloatingLabel,
    'LineRipple'      : MDCLineRipple,
    'NotchedOutline'  : MDCNotchedOutline,
    'Radio'           : MDCRadio,
    'Select'          : MDCSelect,
    'SelectHelperText': MDCSelectHelperText,
    'SelectIcon'      : MDCSelectIcon,
    'Slider'          : MDCSlider,
    'MenuSurface'     : MDCMenuSurface,
    'Menu'            : MDCMenu,
    'Snackbar'        : MDCSnackbar,
    'TabBar'          : MDCTabBar,
    'TabIndicator'    : MDCTabIndicator,
    'TabScroller'     : MDCTabScroller,
  })
}
