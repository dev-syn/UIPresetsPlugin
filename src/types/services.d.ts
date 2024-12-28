interface ServerScriptService extends Instance {
    UIPresetsPlugin: {
        models: Folder & {
            UIPresetsBG: Frame & {
                SettingsBtn: ImageButton;
                Content: Frame & {
                    ["NavItem-Main"]: Frame & {
                        Content: Frame;
                    };
                    ["NavItem-Presets"]: Frame & {
                        CloseBtn: ImageButton;
                        Content: Frame;
                    };
                    ["NavItem-Components"]: Frame & {
                        CloseBtn: ImageButton;
                        Content: Frame;
                    };
                };
                Title: TextLabel & {
                    UICorner: UICorner;
                };
                NavbarBG: Frame & {
                    Navbar: ScrollingFrame & {
                        ComponentsBtn: TextButton & {
                            UITextSizeConstraint: UITextSizeConstraint;
                        };
                        PresetsBtn: TextButton & {
                            UITextSizeConstraint: UITextSizeConstraint;
                        };
                        UIListLayout: UIListLayout;
                    };
                };
            };
        };
        utils: Folder & {
            UI: Folder & {
                main: ModuleScript;
            };
        };
        userInterface: Folder & {
            UIPresetsUIHandler: ModuleScript;
        };
        include: Folder & {
            RuntimeLib: ModuleScript;
            Promise: ModuleScript;
            node_modules: Folder & {
                ["@rbxts"]: Folder & {
                    uipresets: ModuleScript & {
                        presets: Folder & {
                            settings: Folder & {
                                TickSetting: ModuleScript;
                            };
                            Placeholder: ModuleScript;
                        };
                        components: Folder & {
                            SelectableGroup: ModuleScript;
                            Navbar: ModuleScript;
                            ContextMenu: ModuleScript;
                            ToolTip: ModuleScript;
                            BoundCheck: ModuleScript;
                        };
                        UIPresetsConfig: ModuleScript;
                    };
                    services: ModuleScript;
                    beacon: Folder & {
                        out: ModuleScript;
                    };
                    t: Folder & {
                        lib: Folder & {
                            ts: ModuleScript;
                        };
                    };
                    ["compiler-types"]: Folder & {
                        types: Folder;
                    };
                    types: Folder & {
                        include: Folder & {
                            generated: Folder;
                        };
                    };
                };
            };
        };
        types: Folder & {
            t: Folder & {
                UI: Folder & {
                    instances: Folder & {
                        NavItems: ModuleScript;
                    };
                };
            };
        };
    }
}