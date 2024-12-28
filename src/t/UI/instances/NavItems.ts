import { t } from '@rbxts/t';
import { NavItemMain } from '../../../types/UI/instances/NavItems';

const INavItemMain: t.check<NavItemMain> = t.intersection(t.instanceIsA("Frame"),t.children({
    Content: t.instanceIsA("Frame")
}));

const INavItemPresets: t.check<NavItemMain> = t.intersection(t.instanceIsA("Frame"),t.children({
    CloseBtn: t.instanceIsA("ImageButton"),
    Content: t.instanceIsA("Frame")
}));

const INavItemComponents: t.check<NavItemMain> = t.intersection(t.instanceIsA("Frame"),t.children({
    CloseBtn: t.instanceIsA("ImageButton"),
    Content: t.instanceIsA("Frame")
}));

const INavItems = t.intersection(t.instanceIsA("Frame"),t.children({
    ["NavItem-Main"]: INavItemMain,
    ["NavItem-Presets"]: INavItemPresets,
    ["NavItem-Components"]: INavItemComponents
}));

export = INavItems;