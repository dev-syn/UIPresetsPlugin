import type { ComponentsMap } from '@rbxts/uipresets/out/types/components';
import type { PresetsMap } from '@rbxts/uipresets/out/types/presets';
import { UIPresetsBG } from 'models/UIPresetsBG.type';
import { ConstructorParamsMap } from 'types/constructor';

/*
type PluginEvents = {
    CreateComponent: BindableEvent<(name: keyof ComponentsMap,...args: ConstructorParamsMap<ComponentConstructors>[typeof name]) => void>,
    CreatePreset: BindableEvent<(name: keyof PresetsMap,...args: ConstructorParamsMap<PresetConstructors>[typeof name]) => void>,
}
*/

type UIPresetsPlugin = Script & {
    events: Folder, //& PluginEvents
    models: Folder & {
        UIPresetsBG: UIPresetsBG
    },
    types: Folder,
    userInterface: Folder,
    utils: Folder
}

const _UIPresetsPlugin: UIPresetsPlugin = script.Parent!.Parent! as UIPresetsPlugin;
const Events: UIPresetsPlugin['events'] = _UIPresetsPlugin.events;
const Models: UIPresetsPlugin['models'] = _UIPresetsPlugin.models;

export { _UIPresetsPlugin as UIPresetsScript, Events, Models, /*PluginEvents*/ };