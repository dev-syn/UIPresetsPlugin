import type { ComponentsMap } from '@rbxts/uipresets/out/types/components';
import type { PresetsMap } from '@rbxts/uipresets/out/types/presets';
import { Constructor, ConstructorParamsMap } from 'types/constructor';
import { Events, /*PluginEvents*/ } from 'utils/commonPaths';

import { BoundCheck } from '@rbxts/uipresets/out/components/BoundCheck';
import { ContextMenu } from '@rbxts/uipresets/out/components/ContextMenu';
import Navbar from '@rbxts/uipresets/out/components/Navbar';
import { SelectableGroup } from '@rbxts/uipresets/out/components/SelectableGroup';
import { ToolTip } from '@rbxts/uipresets/out/components/ToolTip';
import { CloseBtn } from '@rbxts/uipresets/out/presets/buttons/CloseBtn';
import { TickSetting } from '@rbxts/uipresets/out/presets/settings/TickSetting';

class UIPresetsManager {
    // static BE_CreateComponent: PluginEvents["CreateComponent"] = Events.CreateComponent;
    // static BE_CreatePreset: PluginEvents["CreatePreset"] = Events.CreatePreset;

    private static _componentConstructors: { [K in keyof ComponentsMap]: new (...args: any[]) => ComponentsMap[K] } = {
        BoundCheck: BoundCheck,
        ContextMenu: ContextMenu,
        Navbar: Navbar,
        SelectableGroup: SelectableGroup,
        ToolTip: ToolTip
    }

    private static _presetConstructors: { [K in keyof PresetsMap]: new (...args: any[]) => PresetsMap[K] } = {
        CloseBtn: CloseBtn,
        TickSetting: TickSetting
    }

    static {
        // this.BE_CreateComponent.Event.Connect((name,...args) => this.CreateComponent(name,...args));
        // this.BE_CreatePreset.Event.Connect((name,...args) => this.CreatePreset(name,...args));
    }

    /*
    static CreateComponent<T extends keyof ComponentsMap>(
        name: T,
        ...args: ConstructorParamsMap<ComponentConstructors>[T]): ComponentsMap[T] {
        const Constructor = this._componentConstructors[name];
        const component: ComponentsMap[T] = new Constructor(...args) as ComponentsMap[T];
        // TODO: Make a component base class and preset class for ClassNames
        return component;
    }

    static CreatePreset<T extends keyof PresetsMap>(
        name: T,
        ...args: ConstructorParamsMap<PresetConstructors>[T]): PresetsMap[T] {
        const Constructor = this._presetConstructors[name];
        return new Constructor(...args as ConstructorParamsMap<PresetConstructors>[T]) as PresetsMap[T];
    }

    */
}

export { UIPresetsManager, ComponentsMap, PresetsMap };