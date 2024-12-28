type NavItemMain = Frame & {
    Content: Frame;
} 

type NavItemPresets = Frame & {
    CloseBtn: ImageButton;
    Content: Frame;
}

type NavItemComponents = Frame & {
    CloseBtn: ImageButton;
    Content: Frame;
}

type NavItems = Frame & {
    ["NavItem-Main"]: NavItemMain;
    ["NavItem-Presets"]: NavItemPresets;
    ["NavItem-Components"]: NavItemComponents
}

export { NavItems, NavItemMain, NavItemPresets, NavItemComponents };